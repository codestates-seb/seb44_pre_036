package seb44pre036.qna.member.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import seb44pre036.qna.answer.dto.AnswerDto;
import seb44pre036.qna.answer.entity.Answer;
import seb44pre036.qna.question.dto.QuestionResponseDto;
import seb44pre036.qna.question.entity.Question;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;
import java.time.LocalDateTime;
import java.util.List;

@Getter @Setter
public class MemberDto {

    @Getter @Setter
    public static class post {

        @NotBlank(message = "공백이 아니어야 합니다.")
        @Email(message = "이메일 형식을 지켜주세요.")
        private String email;

        @NotBlank(message = "공백이 아니어야 합니다.")
        @Size(min = 1, max = 10, message = "이름은 10글자 이하로 작성해주세요.")
        private String name;

        @NotBlank(message = "공백이 아니어야 합니다.")
        @Size(min = 8, max = 16, message = "비밀번호는 8글자 이상, 16글자 이하로 작성해주세요.")
        private String password;

    }

    @Getter @Setter
    public static class patch {
        private Long memberId;

        @NotBlank(message = "공백이 아니어야 합니다.")
        @Email(message = "이메일 형식을 지켜주세요.")
        private String email;

        @NotBlank(message = "공백이 아니어야 합니다.")
        @Size(min = 1, max = 10, message = "이름은 10글자 이하로 작성해주세요.")
        private String name;

        @NotBlank(message = "공백이 아니어야 합니다.")
        @Size(min = 8, max = 16, message = "비밀번호는 8글자 이상, 16글자 이하로 작성해주세요.")
        private String password;
    }

    @Getter @Setter
    public static class response{
        private Long memberId;
        private String email;
        private String name;
    }

    @Getter
    @Builder
    public static class ResponseMyPage {
        private Long memberId;
        private String name;
        private String email;
        private LocalDateTime createdTime;
        private LocalDateTime modifiedTime;
        private List<String> authorities;
        private List<QuestionResponseDto.QuestionMemberResponseForList> questions;
        private List<AnswerDto.AnswerMemberResponseForList> answers;
    }
}
