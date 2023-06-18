package seb44pre036.qna.answer.entity;


import lombok.Getter;

import javax.persistence.*;

@Getter
@Entity(name="ANSWER")
public class Answer {

    @Id
    @Column(name = "ANSWER_ID")
    private long answerId;

    @Column(name = "CONTENT")
    private String content;

    @Column(name ="IS_ACCEPTED")
    private boolean isAccepted;

    @Column(name = "CREATED_AT")
    private String createdAt;

    @Column(name = "UPDATED_AT")
    private String updatedAt;

    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private long memberId;

    @ManyToOne
    @JoinColumn(name = "QUESTION_ID")
    private long questionId;

}
