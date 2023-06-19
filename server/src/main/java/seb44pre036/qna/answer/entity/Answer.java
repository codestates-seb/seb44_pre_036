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

    @Column(name ="IS_ACCEPTED")
    private boolean isAccepted;

    @Column(name = "CREATED_AT")
    private LocalDateTime createdAt = LocalDateTime.now();

    @Column(name = "UPDATED_AT")
    private LocalDateTime updatedAt = LocalDateTime.now();


    @ManyToOne
    @JoinColumn(name = "QUESTION_ID")
    private Question question;

    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;



}