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


var _randomQuestion = __webpack_require__(1);

var _randomQuestion2 = _interopRequireDefault(_randomQuestion);

var _clean = __webpack_require__(3);

var _clean2 = _interopRequireDefault(_clean);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

$(function () {

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
    (0, _randomQuestion2.default)();
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
    half.off("click");
    redLineHalf.css('display', 'block');
    var randomHalf = Math.round(Math.random() * 1 + 1);
    for (var i = 0; i < answers.length; i++) {
      if ($(answers[3]).data('good') === true) {
        $(answers[0]).css('visibility', 'hidden');
        $(answers[randomHalf]).css('visibility', 'hidden');
      } else if ($(answers[i]).data('50x50') === 'half') {
        $(answers[i]).css('visibility', 'hidden');
      }
    };
  });

  var score = $('.score');
  var summaryPage = $('#summary');
  var counter = 1;
  var scoreCounter = 0;

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

  var summaryPageRight = $('#summary').find('.middle').find('.rightAnswers');

  function summary() {
    var answersSummary = $('#summary').find('.middle').find('.rightAnswers').find('.answers');
    for (var i = 0; i < answersSummary.length; i++) {
      for (var j = 0; j < answerArray.length; j++) {
        if (i === j) {
          $(answersSummary[i]).html(answerArray[j]);
        }
      }
    }
  }
  next.on('click', function (event) {
    index++;
    for (var i = 0; i < answers.length; i++) {
      $(answers[i]).css('backgroundColor', '#545E6E');
    }
    $(event.target).css('display', 'none');
    friendAnswer.css('display', 'none');
    teacherHint.css('display', 'none');

    if (counter < 3) {
      (0, _clean2.default)();
      (0, _randomQuestion2.default)();
      counter = counter + 1;
      questionNumber.text('Pytanie ' + counter);
    } else {
      pageQuestion.css('display', 'none');
      summaryPage.css('display', 'flex');
      phone.css('display', 'none');
      teacher.css('display', 'none');
      half.css('display', 'none');
      summary();
    }
  });
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
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
    var randomQuestion = response[randomNumberQuestion].question;
    var goodAnswer = response[randomNumberQuestion].goodAnswer;
    var badAnswers = response[randomNumberQuestion].badAnswers;
    question.text(randomQuestion);
    var goodAnswerNumber = Math.round(Math.random() * 3);

    var score = $('.score');

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
          $(answers[i]).attr('data-50x50', 'none');
        } else if (i === j && i !== goodAnswerNumber) {
          $(answers[i]).text(badAnswers[j]);
          $(answers[i]).attr('data-good', 'wrong');
          $(answers[i]).attr('data-50x50', 'half');
        } else if (i > j) {
          $(answers[i]).text(badAnswers[goodAnswerNumber]);
          $(answers[i]).attr('data-good', 'wrong');
        }
      }
    };
    var teacherHint = $('.teacherHint').find('.hint');
    var teacherHintNumber = Math.round(Math.random() * 2);
    teacherHint.text('Na pewno nie jest to odpowied\u017A "' + badAnswers[teacherHintNumber] + '"!');

    var friendAnswer = $('.friendAnswer').find('.hint');
    friendAnswer.text('Jestem pewien, \u017Ce jest to odpowied\u017A "' + goodAnswer + '"!');
  });
}

exports.default = getQuestion;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ }),
/* 3 */
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
    $(answers[i]).removeAttr('data-50x50');
    $(answers[i]).text('');
  }
}

exports.default = clean;

/***/ })
/******/ ]);