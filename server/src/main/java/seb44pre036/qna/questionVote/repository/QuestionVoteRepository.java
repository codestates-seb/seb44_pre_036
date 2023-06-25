package seb44pre036.qna.questionVote.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import seb44pre036.qna.questionVote.entity.QuestionVote;

public interface QuestionVoteRepository extends JpaRepository<QuestionVote, Long> {
}
