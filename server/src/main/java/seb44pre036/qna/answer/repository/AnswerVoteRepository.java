package seb44pre036.qna.answer.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import seb44pre036.qna.answer.entity.AnswerVote;

public interface AnswerVoteRepository extends JpaRepository<AnswerVote,Long> {
}
