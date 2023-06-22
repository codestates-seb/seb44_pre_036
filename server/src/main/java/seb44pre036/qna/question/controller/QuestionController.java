package seb44pre036.qna.question.controller;

import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;
import seb44pre036.qna.auth.interceptor.JwtParseInterceptor;
import seb44pre036.qna.question.dto.MultiResponseDto;
import seb44pre036.qna.question.dto.QuestionDto;
import seb44pre036.qna.question.entity.Question;
import seb44pre036.qna.question.mapper.QuestionMapper;
import seb44pre036.qna.question.service.QuestionService;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/questions")
public class QuestionController {
    private final static String QUESTION_DEFAULT_URL = "/questions";
    private final QuestionMapper questionMapper;
    private final QuestionService questionService;

    public QuestionController(QuestionMapper questionMapper, QuestionService questionService) {
        this.questionMapper = questionMapper;
        this.questionService = questionService;
    }

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

        return new ResponseEntity<>(questionMapper.questionToQuestionResponseDto(question), HttpStatus.OK);

    }

    @GetMapping("/{question-id}")
    public ResponseEntity getQuestion(@Positive @PathVariable("question-id") long questionId) {
        Question question = questionService.findQuestion(questionId);

        return new ResponseEntity<>(questionMapper.questionToQuestionResponseDto(question),HttpStatus.OK);
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
