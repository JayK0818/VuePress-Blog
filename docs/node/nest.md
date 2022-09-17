# Nest

  本文记录一下按照官方文档学习Nest的过程。

[Nestjs官网](https://docs.nestjs.com/)

## Install

```js
// 安装nest 脚手架
npm i -g @nestjs/cli
nest new project-name

npm run start // 会在本地启动一个3000端口的服务
```

## Controllers

  Controllers are responsible for handling incoming requests and returning responses to the client。
  使用 @Controller() 装饰器定义一个控制器。 我们可以在控制器中指定一个前缀用来管理一系列相关的路由。

### Routing

```js
import { Controller, Get } from '@nestjs/common';

@Controller({
  host: '192.168.0.588' // 判断请求是否来自这个地址
})
@Controller('cats')
export class CatsController {
  @Get()  // 告诉nest 是一个get请求和路由(路由是由控制器装饰器的路由前缀和@Get()装饰器的路径拼接而成)
  findAll(): string {
    return 'This action returns all cats';
  }
}

// Nest提供了对应HTTP请求方法的装饰器 @Get, @Post, @Put, @Delete ... @All包括前述所有方法
```

### Request

  方法有时需要获取到客户端请求的详细信息。Nest提供一个 @Req 装饰器 用来获取请求的信息。
```js
import { Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Req() request: Request): string {
    console.log('request', request);
    return this.appService.getHello();
  }
}
// 为了获取更好的express 类型, 安装 @types/express
/**
 * @Request                     req
 * @Response                    res
 * @Session                     req.session
 * @Param                       req.params
 * @Body                        req.body
 * @Query                       req.query
 * @Headers                     req.headers
*/
```
![nest-request](./images/nest-request.png)

```js
// app.controller.ts
import { Controller, Get, HttpCode, Header } from 'nestjs/common'

@Controller()
export class AppController {
  @Get('/api/players')  // 通过get请求 /api/players
  @HttpCode(200)        // 状态码
  @Header('Cache-Control', 'none')  // 响应头
  @Redirect('https://www.baidu.com', 301) // @Redirect takes two arguments url and statusCode.
  getPlayers() { 
    return this.appService.getPlayers()
  }
}

// app.service.ts
export type PlayerProps = {
  firstName: string;
  lastName: string;
  id: number;
};
const player_list: PlayerProps[] = [
  {
    firstName: 'lebron',
    lastName: 'james',
    id: 1
  },
  {
    firstName: 'kyrie',
    lastName: 'irving',
    id: 2
  },
]
import { Injectable } from 'nestjs/common'
export class AppSerivce {
  getPlayers() {
    return player_list
  }
}
```

### 动态路由

```ts
// app.controller.ts
import { Controller, Get, Param } from 'nestjs/common'
export class AppController {
  @Get('/api/players/:id') // 通过get请求 /api/players/1  /api/players/2 ...
  findPlayer (@Param('id') id: string): PlayerProps {
    return this.appService.findPlayer(id)
  }
  // 另一种写法,
  findPlayer(@Param() params): PlayerProps {
    console.log('params:', params); // {id: 1}
    return this.appService.findPlayer(params.id);
  }
}

// app.service.ts
export class AppService {
  findPlayer(id: string) {
    const player = player_list.find((player) => player.id === Number(id))
    if (player) return player
    return null
  }
}
```

### Post

  使用post请求前需要定义一个 DTO(Data Transfer Object) schema. 是一个对象用来定义post请求的参数类型。
```ts
// controller.ts
import { Controller, Body, Post } from 'nestjs/common'

type UserProps = {
  username: string;
  password: string
}

@Controller()
export class AppController {
  @Post('/api/login')
  userLogin(@Body() user: UserProps) {
    return this.appService.userLogin(user)
  }
}

// app.service.ts
import { Injectable } from '@nestjs/common';
@Injectable()
export class AppService {
  userLogin(user: UserProps) {
    if (user.username === 'jack' && user.password === '123456') {
      return {
        code: 200,
        message: 'success',
      };
    } else {
      return {
        code: 0,
        message: 'error',
      };
    }
  }
}
```

## Provider

  Controllers should handle HTTP requests and delegate more complex tasks to providers. Providers are plain JavaScript classes
  that are declared as providers in a module.
```js
// player.interface.ts
type PlayerProps = {
  firstName: string;
  lastName: string;
  age: number;
};

// player.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import type { PlayerProps } from './player.interface';
import { PlayerService } from './player.service';

// Controllers should handle HTTP request and delegate more complex tasks to providers.
@Controller('/api/player')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Post('create')
  create_player(@Body() player: PlayerProps) {
    this.playerService.create(player);
  }
  @Get('find')
  get_player() {
    return this.playerService.get();
  }
}


// player.service.ts
// This service will be responsible for data storage and retrieval. and is designed to be 
// used by the PlayerController.
import { Injectable } from '@nestjs/common';
import type { PlayerProps } from './player.interface';

@Injectable()
export class PlayerService {
  private readonly players: PlayerProps[] = [
    { firstName: 'kyrie', lastName: 'irving', age: 31 },
    { firstName: 'lebron', lastName: 'james', age: 38 },
  ];
  create(player: PlayerProps) {
    this.players.push(player);
  }
  get(): PlayerProps[] {
    return this.players;
  }
}

// app.module.ts
import { Module } from '@nestjs/common';
import { PlayerService } from './player/player.service';
import { AppService } from './app.service';

// Provider registration
@Module({
  imports: [],
  controllers: [PlayerController],
  providers: [PlayerService],
})
export class AppModule {}
// A feature module simply organizes code relevant for a specific feature, keeping code
// organized and establishing clear boundaries.


// player.module.ts
import { Module } from '@nestjs/common';
import { PlayerService } from './player/player.service';
import { PlayerController } from './player/player.controller';
@Module({
  controllers: [PlayerController],
  providers: [PlayerService]
})
export class PlayerModule {}

// app.module.ts
// The last thing we need to do is import this module into the root module.
import { PlayerModule } from './player/player.module'
import { Module } from '@nestjs/common';
@Module({
  imports: [PlayerModule]
})
```

## Middleware

  Middleware is a function which is called before the route handler. Middleware have access to the
  request and response objects.

```ts
// middleware/logger.middleware.ts
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('request...')
    next()
  }
}

// Applying middleware
// app.module.ts
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { LoggerMiddleware } from './middleware/logger.middleware';
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // set up the LoggerMiddleware for the /api/player route.
    consumer.apply(LoggerMiddleware).forRoutes('api/player');
    // 另一种写法
    consumer.apply(LoggerMiddleware).forRoutes(PlayerController);
  }
}
```
```ts
// 将class middleware 转换为 functional middleware.
// middleware/logger.ts
import { Request, Response, NextFunction } from 'express';
export function logger(req: Request, res: Response, next: NextFunction) {
  console.log('request...')
  next();
}

// app.module.ts
consumer.apply(logger).forRoutes(PlayerController)


// Multiple middleware
consumer.apply(cors(), helmet(), logger).forRoutes(PlayerController);

// global middleware
// main.ts
const app = await NestFactory.create(AppModule);
app.use(logger);
```

## Exception

```ts
// Throwing standard exceptions
// Nest provides a build-in HttpException class exposed from the '@nestjs/common' package.
// player.controller.ts
import { HttpStatus } from '@nestjs/common';

@Get()
async get() {
  throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
}
```
  The HttpException constructor takes two required arguments which determine the response:
1. The response argument defines the JSON response body.
2. The status argument defines the HTTP status code.

```ts
// overriding the entire response body:
@Get()
async get() {
  throw new HttpException({
    status: HttpStatus.FORBIDDEN,
    error: 'This is a custom message'
  }, HttpStatus.FORBIDDEN)
}

// 自定义异常
// forbidden.exception.ts
export class ForbiddenException extends HttpException {
  constructor() {
    super('Forbidden', HttpStatus.FORBIDDEN)
  }
}

// player.controller.ts
@Get()
async get() {
  throw new ForbiddenException();
}
```

## Pipe

  Pipes have two typical use cases:
1. transformation: transform input data to the desired form;
2. validation: evaluate input data and if valid, simply pass it through unchanged;

```ts
import { Get, Param, Controller, ParseIntPipe, Query } from '@nestjs/common';
@Controller('api/player')
export class PlayerController {
  constructor(private readonly playerService: PlayerService){};
  @Get('/search/:id')
  // 将参数 id 由字符串转换为数字
  find(@Param('id', ParseIntPipe) id: number) {
    return this.playerService.findPlayer(id)
  }
  find(@Param('id', new ParseIntPipe({errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE})),id:number) {
    return this.playerService.findPlayer(id)
  }
  @Get('query')
  search(@Query('id', ParseIntPipe) id: number) {
    return this.playerService.search_player(id);
  }
}
```
1. ValidatonPipe
2. ParseIntPipe
3. ParseFloatPipe
4. ParseBoolPipe
5. ParseArrayPipe
6. ParseUUIDPipe
7. PaeseEnumPipe

  They are exported from the @nestjs/common package.

### Custom Pipes

```ts
// player.validation.ts
import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';
@Injectable()
export class PlayerValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    return value
  }
}
/*
PipeTransform<T, R> // T 表示输入的value类型, R 表明value返回的数据类型
自定义pipe验证器必须实现一个transform()方法。
该方法有两个参数 value, metadata.
1. value: 当前接收到的数据
2. metadata: {
  type: 'body' | 'query' | 'param' | 'custom', 表明当前参数类型
  metatype?: Type<unknow>,
  data?: string  传递给装饰器的参数
}
*/

// player.controller.ts
// ...
@Get('search/:id')
search_player(@Param('id', PlayerValidationPipe) id) {
  return this.playerService.search_player(id)
}
```

### Schema validation

  The Joi library allows you to create schemas in a straightforward way.
```js
npm install --save joi
npm install --save-dev @types/joi
```

[Joi](https://joi.dev/api/?v=17.6.0)

```js
// player.validation.ts
import { ObjectSchema } from 'joi';
import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';
@Injectable()
export class CreatePlayerValidation implements PipeTransform {
  constructor(private schema: ObjectSchema) {}
  transform(value) {
/*
  If the input is valid, then the error will be undefined. If the input is invalid, error
  is assigned a ValidationError object providing more information.
*/
    const { error } = this.schema.validate(value)
    if (error) {
      throw new BadRequestException('Validation failed')
    }
    return value;
  }
}

// player.controller.ts
import { UsePipes } from '@nestjs/common';
import { CreatePlayerValidation } from './player.validation';
import Joi = require('joi');
// 接收到创建一个球员数据的验证器
const createPlayerSchema = Joi.object({
  firstName: Joi.string(),
  lastName: Joi.string(),
  id: Joi.number(),
  age: Joi.number(),
});
//...
@Post('create')
@UsePipes(new CreatePlayerValidation(createPlayerSchema))
create(@Body() player: PlayerProps) {
  return this.playerService.create(player)
}
```

## Interceptors

  Interceptors have a set of useful capabilities, They make it possible to:
1. bind extra logic before/after method execution
2. transform the result returned from a function
3. transform the exception thrown from a function
4. extend the basic function behavior
5. completely override a function depending on specfic conditions.

  每一个拦截器需要实现intercept()方法, 该方法接受两个参数. 第一个参数是ExecutionContext, 第二个参数是一个CallHandler, 该接口实现了一个handle()
  方法, 可以在某个节点执行该函数。如果不执行handle(), 那么路由将不会被执行。