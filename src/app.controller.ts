import { Controller, Get, Post, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { AnyFilesInterceptor } from '@nestjs/platform-express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @Post('upload')
  @UseInterceptors(AnyFilesInterceptor())
  uploadFile(@UploadedFiles() files) {
    files.forEach((file) => {
      console.log(file);
      if (file.size) {
        console.log('File is deleted');
      }
    });
    return files;
    console.log(files);
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
