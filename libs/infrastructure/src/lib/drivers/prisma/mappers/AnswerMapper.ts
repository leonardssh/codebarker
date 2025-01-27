import { Answer } from '@codebarker/domain';

import { AnswerModel } from '../models/AnswerModel';

export class AnswerMapper {
  public static toDomain(model: AnswerModel): Answer {
    return Answer.make({
      id: model.id,
      kataId: model.kataId,
      userId: model.userId,
      smell: model.smell,
      isCorrect: model.isCorrect,
    });
  }

  public static toDomainMany(models: AnswerModel[]): Answer[] {
    return models.map(this.toDomain);
  }

  public static toModel(entity: Answer): AnswerModel {
    return {
      id: entity.id,
      kataId: entity.kataId,
      userId: entity.userId,
      smell: entity.smell,
      isCorrect: entity.isCorrect,
    };
  }

  public static toModelMany(entities: Answer[]): AnswerModel[] {
    return entities.map(this.toModel);
  }
}
