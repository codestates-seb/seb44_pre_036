package seb44pre036.qna.question.controller;

import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;
import seb44pre036.qna.answer.mapper.AnswerMapper;
import seb44pre036.qna.auth.interceptor.JwtParseInterceptor;
import seb44pre036.qna.question.dto.MultiResponseDto;
import seb44pre036.qna.question.dto.QuestionDto;
import seb44pre036.qna.question.entity.Question;
import seb44pre036.qna.question.mapper.QuestionMapper;
import seb44pre036.qna.question.service.QuestionService;

import javax.annotation.PostConstruct;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.net.URI;
import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/questions")
public class QuestionController {
    private final static String QUESTION_DEFAULT_URL = "/questions";
    private final QuestionMapper questionMapper;
    private final QuestionService questionService;
    private final AnswerMapper answerMapper;

    public QuestionController(QuestionMapper questionMapper, QuestionService questionService, AnswerMapper answerMapper) {
        this.questionMapper = questionMapper;
        this.questionService = questionService;
        this.answerMapper = answerMapper;
    }
//    @PostConstruct
//    public void postConstruct() {
//        Question question1 = new Question(1L, "제목 테스트1", "본문 테스트1",0,0,LocalDateTime.now(),LocalDateTime.now(),null,null,null);
//        Question question2 = new Question(2L, "제목 테스트2", "본문 테스트2",0,0,LocalDateTime.now(),LocalDateTime.now(),null,null,null);
//        Question question3 = new Question(3L, "제목 테스트3", "본문 테스트3",0,0,LocalDateTime.now(),LocalDateTime.now(),null,null,null);
//        Question question4 = new Question(4L, "제목 테스트4", "본문 테스트4",0,0,LocalDateTime.now(),LocalDateTime.now(),null,null,null);
//        Question question5 = new Question(5L, "제목 테스트5", "본문 테스트5",0,0,LocalDateTime.now(),LocalDateTime.now(),null,null,null);
//        Question question6 = new Question(6L, "제목 테스트6", "본문 테스트6",0,0,LocalDateTime.now(),LocalDateTime.now(),null,null,null);
//        Question question7 = new Question(7L, "제목 테스트7", "본문 테스트7",0,0,LocalDateTime.now(),LocalDateTime.now(),null,null,null);
//        Question question8 = new Question(8L, "제목 테스트8", "본문 테스트8",0,0,LocalDateTime.now(),LocalDateTime.now(),null,null,null);
//        Question question9 = new Question(9L, "제목 테스트9", "본문 테스트9",0,0,LocalDateTime.now(),LocalDateTime.now(),null,null,null);
//        Question question10 = new Question(10L, "제목 테스트10", "본문 테스트10",0,0,LocalDateTime.now(),LocalDateTime.now(),null,null,null);
//        Question question11 = new Question(11L, "제목 테스트11", "본문 테스트11",0,0,LocalDateTime.now(),LocalDateTime.now(),null,null,null);
//
//
//        questionService.createQuestion(question1, 2L);
//        questionService.createQuestion(question2, 2L);
//        questionService.createQuestion(question3, 2L);
//        questionService.createQuestion(question4, 2L);
//        questionService.createQuestion(question5, 2L);
//        questionService.createQuestion(question6, 2L);
//        questionService.createQuestion(question7, 2L);
//        questionService.createQuestion(question8, 2L);
//        questionService.createQuestion(question9, 2L);
//        questionService.createQuestion(question10, 2L);
//        questionService.createQuestion(question11, 2L);
//
//    }

    @PostMapping()
    public ResponseEntity postQuestion(@Valid @RequestBody QuestionDto.Post requestBody) {
        long authenticatedMemberId = JwtParseInterceptor.getAuthenticatedMemberId();

        Question question = questionMapper.questionPostToQuestion(requestBody);

        Question createdQuestion = questionService.createQuestion(question, authenticatedMemberId);

        URI location = UriComponentsBuilder
                .newInstance()
                .path(QUESTION_DEFAULT_URL + "/{question-id}")
                .buildAndExpand(question.getQuestionId())
                .toUri();

        return ResponseEntity.created(location).build();

    }

    @PatchMapping("/edit/{question-id}")
    public ResponseEntity patchQuestion(@Positive @PathVariable("question-id") long questionId,
                                        @Valid @RequestBody QuestionDto.Patch requestBody) {
        long authenticatedMemberId = JwtParseInterceptor.getAuthenticatedMemberId();

        requestBody.setQuestionId(questionId);

        Question question = questionService.updateQuestion(questionMapper.questionPatchToQuestion(requestBody), authenticatedMemberId);

        return new ResponseEntity<>(questionMapper.questionToQuestionResponseDto(question, answerMapper), HttpStatus.OK);

    }

    @GetMapping("/{question-id}")
    public ResponseEntity getQuestion(@Positive @PathVariable("question-id") long questionId,
                                      HttpServletRequest request,
                                      HttpServletResponse response) {
        Question question = questionService.findQuestion(questionId);
        questionService.viewCountValidation(question, request, response);
        return new ResponseEntity<>(questionMapper.questionToQuestionResponseDto(question, answerMapper),HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getQuestions(@Positive @RequestParam int page,
                                       @Positive @RequestParam int size,
                                       @RequestParam(required = false) String tab) {
        Page<Question> pageQuestions = questionService.findQuestions(page - 1, size, tab);
        List<Question> questions = pageQuestions.getContent();

        return new ResponseEntity<>(
                new MultiResponseDto<>(questionMapper.questionsToQuestionResponseDtos(questions), pageQuestions),
                HttpStatus.OK);
    }

    @GetMapping("/search")
    public ResponseEntity searchQuestions(@Positive @RequestParam int page,
                                          @Positive @RequestParam int size,
                                          @RequestParam(required = false) String keyword) {
        Page<Question> pageQuestions = questionService.searchQuestions(page - 1, size, keyword);
        List<Question> questions = pageQuestions.getContent();

        return new ResponseEntity<>(
                new MultiResponseDto<>(questionMapper.questionsToQuestionResponseDtos(questions), pageQuestions),
                        HttpStatus.OK);
    }

    @DeleteMapping("/{question-id}")
    public ResponseEntity deleteQuestion(@Positive @PathVariable("question-id") long questionId) {
        long authenticatedMemberId = JwtParseInterceptor.getAuthenticatedMemberId();

        questionService.deleteQuestion(questionId, authenticatedMemberId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
