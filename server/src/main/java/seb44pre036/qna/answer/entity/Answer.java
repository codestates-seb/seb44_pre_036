package seb44pre036.qna.answer.entity;



import lombok.Getter;
import lombok.Setter;
import seb44pre036.qna.member.entity.Member;
import seb44pre036.qna.question.entity.Question;

import javax.persistence.*;
import java.time.LocalDateTime;

import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.ArrayList;
import java.util.List;


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

    @Column(name= "VOTE")
    private int vote =0;

    @Enumerated(EnumType.STRING)
    @Column(name="STATUS")
    private AnswerStatus answerStatus = AnswerStatus.ANSWER_NOT_SELECTED;

    @ManyToOne(cascade=CascadeType.PERSIST)
    @JoinColumn(name = "QUESTION_ID")
    private Question question;

    @ManyToOne(cascade=CascadeType.PERSIST)
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    @OneToMany(mappedBy = "answer")
    private List<AnswerVote> answerVotes = new ArrayList<>();


    public enum AnswerStatus {
        ANSWER_NOT_SELECTED("채택이 되지 않은 답변"),
        ANSWER_SELECT("채택된 답변");

        @Getter
        private String status;

        AnswerStatus(String status) {
            this.status = status;
        }
    }

    public void addVotedMembers(AnswerVote vote){
        this.answerVotes.add(vote);
    }
    public long getMilliCreatedAt(){
        ZonedDateTime zdt = ZonedDateTime.of(this.createdAt, ZoneId.systemDefault());
        long date = zdt.toInstant().toEpochMilli();

        return date;
    }
    public long getMilliUpdatedAt(){
        ZonedDateTime zdt = ZonedDateTime.of(this.updatedAt, ZoneId.systemDefault());
        long date = zdt.toInstant().toEpochMilli();

        return date;
    }
}