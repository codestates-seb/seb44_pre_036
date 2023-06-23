package seb44pre036.qna.question.mapper;

import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;
import seb44pre036.qna.question.dto.QuestionDto;
import seb44pre036.qna.question.entity.Question;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-06-23T09:06:59+0900",
    comments = "version: 1.5.3.Final, compiler: javac, environment: Java 11.0.18 (Azul Systems, Inc.)"
)
@Component
public class QuestionMapperImpl implements QuestionMapper {

    @Override
    public Question questionPatchToQuestion(QuestionDto.Patch requestBody) {
        if ( requestBody == null ) {
            return null;
        }

        Question.QuestionBuilder question = Question.builder();

        question.questionId( requestBody.getQuestionId() );
        question.title( requestBody.getTitle() );
        question.content( requestBody.getContent() );

        return question.build();
    }
}
