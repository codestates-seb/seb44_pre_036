package seb44pre036.qna.question.mapper;

import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;
import seb44pre036.qna.member.entity.Member;
import seb44pre036.qna.question.dto.QuestionDto;
import seb44pre036.qna.question.entity.Question;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-06-21T15:14:29+0900",
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

        question.member( patchToMember( requestBody ) );
        question.questionId( requestBody.getQuestionId() );
        question.title( requestBody.getTitle() );
        question.content( requestBody.getContent() );

        return question.build();
    }

    protected Member patchToMember(QuestionDto.Patch patch) {
        if ( patch == null ) {
            return null;
        }

        Member member = new Member();

        member.setMemberId( patch.getMemberId() );

        return member;
    }
}
