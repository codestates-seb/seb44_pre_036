package seb44pre036.qna.question.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import seb44pre036.qna.member.entity.Member;
import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;


public class QuestionDto {
    @Getter
    @AllArgsConstructor
    public static class Post {
        @NotBlank(message = "제목은 공백이 아니어야 합니다.")
        private String title;

        @NotBlank(message = "내용은 공백이 아니어야 합니다.")
        private String content;

    }
    @Getter
    @Setter
    public static class Patch {
        private long questionId;

        @NotBlank(message = "제목은 공백이 아니어야 합니다.")
        private String title;

        @NotBlank(message = "내용은 공백이 아니어야 합니다.")
        private String content;
    }
    @Getter
    @Setter
    public static class Response { // 질문 상세페이지
        private long questionId;
        private String title;
        private String content;
        private LocalDateTime createdAt;
        private LocalDateTime updatedAt;
        private long memberId;
        private String name;
//        private List<AnswerDto.Response> answers;



        public void setMemberId(Member member){
            this.memberId = member.getMemberId();
        }


        public void setMemberName(Member member) {
            this.name = member.getName();
        }
    }

    @Getter
    @Setter
    public static class ResponseList { // 질문 리스트 페이지
        private long questionId;
        private String title;
        private LocalDateTime createdAt;
        private LocalDateTime updatedAt;
        private long memberId;
        private String name;

    }

}