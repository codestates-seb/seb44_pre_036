package seb44pre036.qna.question.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import seb44pre036.qna.exception.BusinessLogicException;
import seb44pre036.qna.exception.ExceptionCode;
import seb44pre036.qna.member.service.MemberService;
import seb44pre036.qna.question.entity.Question;
import seb44pre036.qna.question.repository.QuestionRepository;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
public class QuestionService {
    private final QuestionRepository questionRepository;
    private final MemberService memberService;

    public QuestionService(QuestionRepository questionRepository, MemberService memberService) {
        this.questionRepository = questionRepository;
        this.memberService = memberService;
    }

    public Question createQuestion(Question question) {
        memberService.findVerifiedMember(question.getMember().getMemberId());

        return questionRepository.save(question);
    }
    public Question updateQuestion(Question question) {
        Question findedQuestion = findVerifiedQuestion(question.getQuestionId());

        if(!findedQuestion.getQuestionId().equals(question.getMember().getMemberId())){
            throw new BusinessLogicException(ExceptionCode.ACCESS_DENIED);
        }

        Optional.ofNullable(question.getTitle())
                .ifPresent(findedQuestion::setTitle);
        Optional.ofNullable(question.getContent())
                .ifPresent(findedQuestion::setContent);

        findedQuestion.setUpdatedAt(LocalDateTime.now());

        return findedQuestion;
    }
    public Question findQuestion(long questionId) {
        Question findedQuestion = findVerifiedQuestion(questionId);
        findedQuestion.setViewCount(findedQuestion.getViewCount() + 1);

        return questionRepository.save(findedQuestion);
    }
    public Page<Question> findQuestions(int page, int size, String tab) {
        if (tab.equals("View")) {
            tab = "viewCount";
        } else if (tab.equals("Newest")) {
            tab = "questionId";
        }

        return questionRepository.findAll(PageRequest.of(page, size, Sort.by(tab).descending()));

    }
    public void deleteQuestion(long questionId) {
        Question question = findVerifiedQuestion(questionId);

        questionRepository.delete(question);
    }
    private Question findVerifiedQuestion(long questionId) {
        // TODO 작성자만 삭제 가능

        Optional<Question> optionalQuestion = questionRepository.findById(questionId);

        Question findedQuestion = optionalQuestion.orElseThrow(() -> new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));

        return findedQuestion;
    }
}
