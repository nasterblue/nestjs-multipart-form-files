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
      if (file.size === 0 || file.mimetype === 'application/octet-stream') {
        console.log('File  deleted');
      } else if (file.mimetype === 'application/json') {
        //no change
        console.log('File  no change');
      } else {
        // new/update
        console.log('File  new/update');
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
