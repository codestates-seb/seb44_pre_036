package seb44pre036.qna.member.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

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
}
