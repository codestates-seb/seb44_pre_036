package seb44pre036.qna.question.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import seb44pre036.qna.answer.entity.Answer;
import seb44pre036.qna.member.entity.Member;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long questionId;

    @Column(name = "TITLE", nullable = false)
    private String title;

    @Column(name = "CONTENT", nullable = false)
    private String content;

    @Column(name = "VIEW_COUNT", nullable = false)
    private long viewCount;

    @Column(name ="CREATED_AT")
    private LocalDateTime createdAt = LocalDateTime.now();

    @Column(name = "UPDATED_AT")
    private LocalDateTime updatedAt = LocalDateTime.now();

    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    @OneToMany(mappedBy = "question", cascade = CascadeType.ALL)
    private List<Answer> answers = new ArrayList<>();

    public void addAnswers(Answer answer) {
        answers.add(answer);
        if(answer.getQuestion() != this){
            answer.addQuestion(this);
        }
    }

}
