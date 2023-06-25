package seb44pre036.qna.questionVote.entity;

import lombok.Getter;
import lombok.Setter;
import seb44pre036.qna.member.entity.Member;
import seb44pre036.qna.question.entity.Question;

import javax.persistence.*;

@Getter
@Setter
@Entity
public class QuestionVote {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long questionVoteId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    @Enumerated(EnumType.STRING)
    private QuestionVoteStatus questionVoteStatus = QuestionVoteStatus.ZERO;

    @ManyToOne
    @JoinColumn(name = "QUESTION_ID")
    private Question question;

    public enum QuestionVoteStatus {
        ZERO(0),
        PLUS(1),
        MINUS(-1);

        @Getter
        private int score;


        QuestionVoteStatus(int score) {
            this.score = score;
        }
    }
}
