package seb44pre036.qna.answer.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import seb44pre036.qna.member.entity.Member;
import seb44pre036.qna.answer.entity.Answer;

import java.util.Optional;

public interface AnswerRepository extends JpaRepository<Answer,Long> {
    @Override
    Optional<Answer> findById(Long aLong);

    @Query("DELETE FROM ANSWER")
    void deleteAnswers();

    /*
    @Query("DELETE FROM ANSWER where ANSWER.answerId= :answerId")
    void deleteAnswer(long answerId);

     */
}