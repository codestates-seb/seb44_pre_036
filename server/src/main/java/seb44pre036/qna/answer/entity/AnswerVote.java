package seb44pre036.qna.answer.entity;

import lombok.*;

import javax.persistence.*;


@Getter
@Setter
@Entity(name="ANSWER_VOTE")
public class AnswerVote {

    @Id
    @Column(name = "VOTE_ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long votedId;

    @Column(name = "RECOMMEND")
    private boolean recommend;

    @Column(name="VOTED_MEMBER_ID")
    private long votedMemberId;

    @ManyToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name="ANSWER_ID")
    private Answer answer;

}
