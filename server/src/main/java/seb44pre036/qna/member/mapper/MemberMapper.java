package seb44pre036.qna.member.mapper;

import org.mapstruct.Mapper;
import org.springframework.web.util.UriComponentsBuilder;
import seb44pre036.qna.answer.dto.AnswerDto;
import seb44pre036.qna.answer.entity.Answer;
import seb44pre036.qna.member.dto.MemberDto;
import seb44pre036.qna.member.entity.Member;
import seb44pre036.qna.question.dto.QuestionResponseDto;
import seb44pre036.qna.question.entity.Question;

import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface MemberMapper {
    Member memberPostDtoToMember(MemberDto.post memberPostDto);
    Member memberPatchDtoToMember(MemberDto.patch memberPatchDto);
    MemberDto.response memberToMemberResponseDTO(Member member);

    default MemberDto.ResponseMyPage memberToMyPage(Member member){
        return MemberDto.ResponseMyPage.builder()
                .memberId(member.getMemberId())
                .name(member.getName())
                .email(member.getEmail())
                .authorities(member.getRoles())
                .answers(getAnswerToMember(member.getAnswers()))
                .questions(getQuestionToMember(member.getQuestions()))
                .createdTime(member.getCreatedAt())
                .modifiedTime(member.getUpdatedAt())
                .build();
    }

    default List<QuestionResponseDto.QuestionMemberResponseForList> getQuestionToMember(List<Question> question) {
        return question.stream()
                .map(questionList -> QuestionResponseDto.QuestionMemberResponseForList.builder()
                        .questionId(questionList.getQuestionId())
                        .questionsTitle(questionList.getTitle())
                        .build())
                .collect(Collectors.toList());

    }

    default List<AnswerDto.AnswerMemberResponseForList> getAnswerToMember(List<Answer> answer) {
        return answer.stream()
                .map(answerList -> AnswerDto.AnswerMemberResponseForList.builder()
                        .questionId(answerList.getQuestion().getQuestionId())
                        .answerId(answerList.getAnswerId())
                        .content(answerList.getContent())
                        .build())
                .collect(Collectors.toList());
    }

}
