import $ from 'jquery';

// примитивный способ вызова и закрытия модального окна

$( document ).ready(function() {
	var addEvent = $('.event_add');
	var closeNewEventModal = $('.close');
	var saveNewEvent = $('.new_event_save');
	var newEventModal = $('#new_event');

	addEvent.on('click', function() {
		newEventModal.addClass('show');
	})

	closeNewEventModal.on('click', function() {
		newEventModal.removeClass('show')
	})
	saveNewEvent.on('click', function() {
		newEventModal.removeClass('show')
	})
});

import './scss/base.scss';
