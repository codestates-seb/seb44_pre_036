package seb44pre036.qna.answer.entity;



import lombok.Getter;
import lombok.Setter;
import org.aspectj.weaver.patterns.TypePatternQuestions;
import seb44pre036.qna.member.entity.Member;
import seb44pre036.qna.question.entity.Question;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@Setter
@Entity(name="ANSWER")
public class Answer {

    @Id
    @Column(name = "ANSWER_ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long answerId;

    @Column(name = "CONTENT")
    private String content;

    @Column(name = "CREATED_AT")
    private LocalDateTime createdAt = LocalDateTime.now();

    @Column(name = "UPDATED_AT")
    private LocalDateTime updatedAt = LocalDateTime.now();

    @Enumerated(EnumType.STRING)
    @Column(name="STATUS")
    private AnswerStatus answerStatus = AnswerStatus.ANSWER_NOT_SELECTED;

    @ManyToOne(cascade=CascadeType.PERSIST)
    @JoinColumn(name = "QUESTION_ID")
    private Question question;

    @ManyToOne(cascade=CascadeType.PERSIST)
    @JoinColumn(name = "MEMBER_ID")
    private Member member;


    public enum AnswerStatus {
        ANSWER_NOT_SELECTED("채택이 되지 않은 답변"),
        ANSWER_SELECT("채택된 답변");

        @Getter
        private String status;

        AnswerStatus(String status) {
            this.status = status;
        }
    }


}