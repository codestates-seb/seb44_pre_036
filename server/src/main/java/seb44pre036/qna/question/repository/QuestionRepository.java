package seb44pre036.qna.question.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import seb44pre036.qna.question.entity.Question;

public interface QuestionRepository extends JpaRepository<Question, Long> {
}