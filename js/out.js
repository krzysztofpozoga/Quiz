/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _clean = __webpack_require__(1);

var _clean2 = _interopRequireDefault(_clean);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

$(function () {

  var questionArray = [];

  function getQuestion() {
    var url = "http://localhost:3000/questions";
    var question = $('.quizQuestion').find('.text');

    var summaryPage = $('#summary').find('.middle').find('.rightAnswers');
    $.ajax({
      method: "GET",
      url: url,
      dataType: "json"
    }).done(function (response) {
      var answers = $('.answer');
      var randomNumberQuestion = Math.round(Math.random() * (response.length - 1));
      var idQuestion = response[randomNumberQuestion].id;
      if (questionArray.indexOf(idQuestion) === -1) {
        questionArray.push(idQuestion);
        var randomQuestion = response[randomNumberQuestion].question;
        var goodAnswer = response[randomNumberQuestion].goodAnswer;
        var badAnswers = response[randomNumberQuestion].badAnswers;
        question.text(randomQuestion);
        var goodAnswerNumber = Math.round(Math.random() * 3);
        var summaryQuestion = $('<div class="question"></div>');
        var summaryAnswer = $('<div class="answers"></div>');

        summaryQuestion.text(randomQuestion);
        summaryPage.append(summaryQuestion);
        summaryPage.append(summaryAnswer);

        for (var i = 0; i < answers.length; i++) {
          $(answers[i]).css('visibility', 'visible');
          for (var j = 0; j < badAnswers.length; j++) {
            if (i === goodAnswerNumber) {
              $(answers[i]).text(goodAnswer);
              $(answers[i]).attr('data-good', 'right');
            } else if (i === j && i !== goodAnswerNumber) {
              $(answers[i]).text(badAnswers[j]);
              $(answers[i]).attr('data-good', 'wrong');
            } else if (i > j) {
              $(answers[i]).text(badAnswers[goodAnswerNumber]);
              $(answers[i]).attr('data-good', 'wrong');
            }
          }
        };
        var _teacherHint = $('.teacherHint').find('.hint');
        var teacherHintNumber = Math.round(Math.random() * 2);
        _teacherHint.text('Na pewno nie jest to odpowied\u017A "' + badAnswers[teacherHintNumber] + '"!');

        var _friendAnswer = $('.friendAnswer').find('.hint');
        _friendAnswer.text('Jestem pewien, \u017Ce jest to odpowied\u017A "' + goodAnswer + '"!');
      } else {
        getQuestion();
      }
    });
  }

  var gameStartButton = $('.button');
  var pageStart = $('#start');
  var categorySelect = $('#category');

  gameStartButton.on('click', function () {
    pageStart.css('display', 'none');
    categorySelect.css('display', 'flex');
  });

  var categoryButton = $('.categoryButton');
  var pageQuestion = $('#question');
  var container = $('.container');
  var questionNumber = $('#question').find('.middle').find('h2');

  categoryButton.on('click', function () {
    categorySelect.css('display', 'none');
    pageQuestion.css('display', 'flex');
    container.css('display', 'flex');
    questionNumber.text('Pytanie ' + counter);
    (0, _clean2.default)();
    getQuestion();
  });

  var teacher = $('.teacher');
  var redLineTeacher = teacher.find('.redLine');
  var phone = $('.phone');
  var redLinePhone = phone.find('.redLine');
  var half = $('.half');
  var redLineHalf = half.find('.redLine');
  var teacherHint = $('.teacherHint');
  var friendAnswer = $('.friendAnswer');
  var answers = $('.answer');

  teacher.on('click', function () {
    friendAnswer.css('display', 'none');
    teacherHint.css('display', 'flex');
    teacher.off("click");
    redLineTeacher.css('display', 'block');
  });
  phone.on('click', function () {
    teacherHint.css('display', 'none');
    friendAnswer.css('display', 'flex');
    phone.off("click");
    redLinePhone.css('display', 'block');
  });
  half.on('click', function () {
    var questionAnswers = $('.answer');
    half.off("click");
    redLineHalf.css('display', 'block');
    for (var i = 0; i < questionAnswers.length; i++) {
      console.log(questionAnswers[i]);
      if ($(questionAnswers[3]).data('good') === 'right') {
        $(questionAnswers[1]).css('visibility', 'hidden');
        $(questionAnswers[2]).css('visibility', 'hidden');
      } else if ($(questionAnswers[2]).data('good') === 'right') {
        $(questionAnswers[0]).css('visibility', 'hidden');
        $(questionAnswers[3]).css('visibility', 'hidden');
      } else if ($(questionAnswers[1]).data('good') === 'right') {
        $(questionAnswers[0]).css('visibility', 'hidden');
        $(questionAnswers[2]).css('visibility', 'hidden');
      } else if ($(questionAnswers[0]).data('good') === 'right') {
        $(questionAnswers[1]).css('visibility', 'hidden');
        $(questionAnswers[3]).css('visibility', 'hidden');
      }
    };
  });

  var summaryPage = $('#summary');
  var counter = 1;
  var next = $('.next');
  var answerArray = [];
  var index = 0;
  answers.on('click', function (event) {
    for (var i = 0; i < answers.length; i++) {
      $(answers[i]).css('backgroundColor', '#545E6E');
    };
    $(event.target).css('backgroundColor', '#8D8276');
    answerArray[index] = event.target.outerHTML;
    next.css('display', 'flex');
  });

  function summary() {
    var answersSummary = $('#summary').find('.middle').find('.rightAnswers').find('.answers');
    for (var i = 0; i < answersSummary.length; i++) {
      var questionId = $('<span></span>');
      questionId.text(i + 1 + '. ');
      $(answersSummary[i]).prev().prepend(questionId);
      for (var j = 0; j < answerArray.length; j++) {
        if (i === j) {
          $(answersSummary[i]).html(answerArray[j]);
        }
      }
    }
  }
  var scoreCounter = 0;
  function addClassAndScore() {
    var rightOrWrong = $('#summary').find('.middle').find('.rightAnswers').find('.answers').find('.answer');
    var score = $('.score');
    for (var i = 0; i < rightOrWrong.length; i++) {
      if ($(rightOrWrong[i]).data('good') === 'right') {
        scoreCounter++;
        $(rightOrWrong[i]).removeClass('answer');
        $(rightOrWrong[i]).css('backgroundColor', 'inherit');
        $(rightOrWrong[i]).addClass('right');
      } else {
        $(rightOrWrong[i]).removeClass('answer');
        $(rightOrWrong[i]).css('backgroundColor', 'inherit');
        $(rightOrWrong[i]).addClass('wrong');
      }
    }
    score.text(scoreCounter);
  }

  var footer = $('footer');
  var playAgain = $('.playAgain');
  next.on('click', function (event) {
    index++;
    for (var i = 0; i < answers.length; i++) {
      $(answers[i]).css('backgroundColor', '#545E6E');
    }
    $(event.target).css('display', 'none');
    friendAnswer.css('display', 'none');
    teacherHint.css('display', 'none');

    if (counter < 20) {
      (0, _clean2.default)();
      getQuestion();
      counter = counter + 1;
      questionNumber.text('Pytanie ' + counter);
    } else {
      pageQuestion.css('display', 'none');
      summaryPage.css('display', 'flex');
      footer.css('justifyContent', 'center');
      playAgain.css('display', 'flex');
      container.css('display', 'none');
      summary();
      addClassAndScore();
    }
  });

  playAgain.on('click', function (event) {
    var middle = $('#question').find('.middle').find('.row');
    for (var i = 1; i < middle.length; i++) {
      $(middle[i]).html("<div class='answer'></div><div class='answer'></div>");
    }
    questionArray = [];
    answerArray = [];
    index = 0;
    scoreCounter = 0;
    counter = 1;
    $(event.target).css('display', 'none');
    footer.css('justifyContent', 'flex-end');
    summaryPage.css('display', 'none');
    categorySelect.css('display', 'flex');
    answers = $('.answer');
    answers.on('click', function (event) {
      for (var _i = 0; _i < answers.length; _i++) {
        $(answers[_i]).css('backgroundColor', '#545E6E');
      };
      $(event.target).css('backgroundColor', '#8D8276');
      answerArray[index] = event.target.outerHTML;
      next.css('display', 'flex');
    });
    teacher.on('click', function () {
      friendAnswer.css('display', 'none');
      teacherHint.css('display', 'flex');
      teacher.off("click");
      redLineTeacher.css('display', 'block');
    });
    phone.on('click', function () {
      teacherHint.css('display', 'none');
      friendAnswer.css('display', 'flex');
      phone.off("click");
      redLinePhone.css('display', 'block');
    });
    half.on('click', function () {
      var questionAnswers = $('.answer');
      half.off("click");
      redLineHalf.css('display', 'block');
      for (var _i2 = 0; _i2 < questionAnswers.length; _i2++) {
        if ($(questionAnswers[3]).data('good') === 'right') {
          $(questionAnswers[1]).css('visibility', 'hidden');
          $(questionAnswers[2]).css('visibility', 'hidden');
        } else if ($(questionAnswers[2]).data('good') === 'right') {
          $(questionAnswers[0]).css('visibility', 'hidden');
          $(questionAnswers[3]).css('visibility', 'hidden');
        } else if ($(questionAnswers[1]).data('good') === 'right') {
          $(questionAnswers[0]).css('visibility', 'hidden');
          $(questionAnswers[2]).css('visibility', 'hidden');
        } else if ($(questionAnswers[0]).data('good') === 'right') {
          $(questionAnswers[1]).css('visibility', 'hidden');
          $(questionAnswers[3]).css('visibility', 'hidden');
        }
      };
    });
    redLineHalf.css('display', 'none');
    redLineTeacher.css('display', 'none');
    redLinePhone.css('display', 'none');
    var rightAnswers = $('#summary').find('.middle').find('.rightAnswers');
    rightAnswers.html('');
  });
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function clean() {
  var question = $('.quizQuestion').find('.text');
  question.text('');
  var answers = $('.answer');
  for (var i = 0; i < answers.length; i++) {
    $(answers[i]).removeAttr('data-good');

    $(answers[i]).text('');
  }
}

exports.default = clean;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ })
/******/ ]);