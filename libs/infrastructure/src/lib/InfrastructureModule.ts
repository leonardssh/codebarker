import { ContainerModule } from 'inversify';

import {
  AnalysisRepositoryToken,
  IAnalysisRepository,
  IKataRepository,
  KataRepositoryToken,
} from '@codebarker/domain';
import { GithubApiToken, LoggerToken } from '@codebarker/application';

import { PrismaService } from './drivers/prisma/PrismaService';
import { PrismaKataRepositoryImpl } from './drivers/prisma/repositories/PrismaKataRepositoryImpl';
import { LoggerLogTailImpl } from './logger/LoggerLogTailImpl';
import { DevelopmentLoggerImpl } from './logger/DevelopmentLoggerImpl';
import { GithubApi } from './githubApi/GithubApi';
import { PrismaAnalysisRepositoryImpl } from './drivers/prisma/repositories/PrismaAnalysisRepositoryImpl';

export class InfrastructureModule extends ContainerModule {
  public constructor() {
    super((bind) => {
      const isDev = process.env.NODE_ENV === 'development';

      bind(PrismaService).toSelf().inSingletonScope();
      bind<IKataRepository>(KataRepositoryToken)
        .to(PrismaKataRepositoryImpl)
        .inSingletonScope();
      bind<IAnalysisRepository>(AnalysisRepositoryToken)
        .to(PrismaAnalysisRepositoryImpl)
        .inSingletonScope();

      bind(LoggerToken)
        .to(isDev ? DevelopmentLoggerImpl : LoggerLogTailImpl)
        .inSingletonScope();

      bind(GithubApiToken).to(GithubApi).inSingletonScope();
    });
  }
}
