package seb44pre036.qna.questionVote.service;

import org.springframework.stereotype.Service;
import seb44pre036.qna.member.entity.Member;
import seb44pre036.qna.question.entity.Question;
import seb44pre036.qna.question.repository.QuestionRepository;
import seb44pre036.qna.questionVote.entity.QuestionVote;
import seb44pre036.qna.questionVote.repository.QuestionVoteRepository;
import java.util.List;

@Service
public class QuestionVoteService {
    private final QuestionRepository questionRepository;
    private final QuestionVoteRepository questionVoteRepository;

    public QuestionVoteService(QuestionRepository questionRepository, QuestionVoteRepository questionVoteRepository) {
        this.questionRepository = questionRepository;
        this.questionVoteRepository = questionVoteRepository;
    }

    public void questionVoteUp(Member member, Question question) {
        QuestionVote questionVote = findQuestionVote(member.getQuestionVotes(), question);
        questionVotePlus(questionVote);
        questionVote.setMember(member);
        questionVote.setQuestion(question);
        questionVoteRepository.save(questionVote);
        question.getVoteCountSum();
        questionRepository.save(question);
    }
    public void questionVoteDown(Member member, Question question) {
        QuestionVote questionVote = findQuestionVote(member.getQuestionVotes(), question);
        questionVoteMinus(questionVote);
        questionVote.setMember(member);
        questionVote.setQuestion(question);
        questionVoteRepository.save(questionVote);
        question.getVoteCountSum();
        questionRepository.save(question);
    }
    private QuestionVote findQuestionVote(List<QuestionVote> questionVotes, Question question) {

        for (QuestionVote questionVote : questionVotes) {
            if(questionVote.getQuestion().getQuestionId().equals(question.getQuestionId())) {
                return questionVote;
            }
        }
        return new QuestionVote();
    }
    private void questionVotePlus(QuestionVote questionVote) {
        if (questionVote.getQuestionVoteStatus().getScore() == 0) {
            questionVote.setQuestionVoteStatus(QuestionVote.QuestionVoteStatus.PLUS);
        } else if (questionVote.getQuestionVoteStatus().getScore() == 1) {

        } else {
            questionVote.setQuestionVoteStatus(QuestionVote.QuestionVoteStatus.ZERO);
        }
    }
    private void questionVoteMinus(QuestionVote questionVote) {
        if (questionVote.getQuestionVoteStatus().getScore() == 0) {
            questionVote.setQuestionVoteStatus(QuestionVote.QuestionVoteStatus.MINUS);
        } else if (questionVote.getQuestionVoteStatus().getScore() == 1) {
            questionVote.setQuestionVoteStatus(QuestionVote.QuestionVoteStatus.ZERO);
        } else {

        }
    }
}
