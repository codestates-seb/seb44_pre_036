package seb44pre036.qna.answer.dto;


import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import seb44pre036.qna.member.entity.Member;
import seb44pre036.qna.question.entity.Question;

import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Setter
@Getter
@NoArgsConstructor
public class AnswerDto {

    @Getter
    @Setter
    public static class Response {
        private long answerId;

        private String content;

        private String isAccepted;

        private LocalDateTime createdAt;

        private LocalDateTime updatedAt;

        private int vote;

        private long questionId;

        private long memberId;

    }

    @Getter
    @Setter
    public static class Responses{
        List<Response> responses = new ArrayList<>();

        public void addResponse(Response response){
            this.responses.add(response);
        }
    }

    @Getter
    @Setter
    public static class Post {

        //@NotBlank(message="맴버 ID 입력이 필요합니다")
        private long memberId;

        @NotBlank(message="질문 ID 입력이 필요합니다")
        private long questionId;

        @NotBlank(message = "답변 내용을 입력해주세요.")
        private String content;

    }

    @Getter
    @Setter
    public static class Find {
        //@NotBlank(message="맴버 ID 입력이 필요합니다")
        private long memberId;

        @NotBlank(message="질문 ID 입력이 필요합니다")
        private long questionId;


        // Highest score , Date Modified , Date created
        @NotBlank(message = "정렬 기준을 입력해주세요")
        private String sortBy;
    }

    @Getter
    @Setter
    public static class Patch {
        //@NotBlank(message="사용자 ID 입력이 필요합니다")
        private long memberId;

        @NotBlank(message = "답변 id가 필요합니다.")
        private long answerId;

        @NotBlank(message = "내용은 공백이 아니어야 합니다.")
        private String content;

    }

    @Getter
    @Setter
    public static class Select {
        //@NotBlank(message = "현재 사용자 정보를 입력해주세요")
        private long memberId;

        @NotBlank(message = "채택할 질문 정보를 입력해주세요")
        private long answerId;
    }

    @Getter
    @Setter
    public static class Vote{
        //@NotBlank(message = "현재 사용자 정보를 입력해주세요")
        private long memberId;

        @NotBlank(message = "투표할 질문 정보를 입력해주세요")
        private long answerId;

        @NotBlank(message = "추천 여부를 입력해주세요")
        private boolean recommend;

        public boolean getRecommend(){
            return this.recommend;
        }
        public void setRecommend(boolean recommend){
            this.recommend=recommend;
        }
    }

    @Getter
    @Builder
    public static class AnswerMemberResponseForList {
        private Long questionId;
        private Long answerId;
        private String content;
    }


}