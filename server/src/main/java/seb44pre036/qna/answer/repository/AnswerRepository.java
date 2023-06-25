package seb44pre036.qna.answer.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import seb44pre036.qna.member.entity.Member;
import seb44pre036.qna.answer.entity.Answer;

import java.util.List;
import java.util.Optional;

public interface AnswerRepository extends JpaRepository<Answer,Long> {
    @Override
    Optional<Answer> findById(Long aLong);

    // 최신부터
    @Query("SELECT a FROM ANSWER a WHERE a.question.questionId = :questionId ORDER BY a.updatedAt DESC")
    List<Answer> sortedByCreatedAtDesc(long questionId);

    // 오래된 것 부터
    @Query("SELECT a FROM ANSWER a WHERE a.question.questionId = :questionId ORDER BY a.createdAt ASC")
    List<Answer> sortedByCreatedAtAsc(long questionId);

    // 채택된 것
    @Query("SELECT a FROM ANSWER a WHERE a.question.questionId = :questionId AND a.answerStatus = 'ANSWER_SELECT'")
    List<Answer> filterBySelected(@Param("questionId") long questionId);

}