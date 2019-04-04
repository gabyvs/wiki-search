import React          from 'react';
import {
  shallow,
  ShallowWrapper }    from 'enzyme';
import
  Pagination,
  { PaginationProps } from './Pagination';

describe('Pagination', () => {
  let pagination: ShallowWrapper;
  let props: any; // which type to use to be able to use mockClear
  let currentPage = 1;
  let numPages = 5;

  beforeEach(() => {
    props = {
      currentPage,
      numPages,
      onFirstPage: jest.fn(),
      onPrevPage: jest.fn(),
      onNextPage: jest.fn(),
      onLastPage: jest.fn()
    };
    pagination = shallow(<Pagination {...props} />);
  });

  afterEach(() => {
    props.onFirstPage.mockClear();
    props.onPrevPage.mockClear();
    props.onNextPage.mockClear();
    props.onLastPage.mockClear();
  });

  it('renders without crashing', () => {});

  it('renders correctly', () => {
    expect(pagination).toMatchSnapshot();
  });

  it('disables "first" button', () => {
    expect(pagination.find('.pagination-first').prop('disabled')).toBe(true);
  });

  it('disables "previous" button', () => {
    expect(pagination.find('.pagination-prev').prop('disabled')).toBe(true);
  });

  it('renders current page label', () => {
    expect(pagination.find('.pagination-label').text()).toBe(`Page 1 of ${numPages}`);
  });

  it('enables "next" button', () => {
    expect(pagination.find('.pagination-next').prop('disabled')).toBe(false);
  });

  it('enables "last" button', () => {
    expect(pagination.find('.pagination-last').prop('disabled')).toBe(false);
  });

  describe('user navigates to next page', () => {
    beforeEach(() => {
      pagination.find('.pagination-first').simulate('click');
    });

    it('calls "onFirstPage"', () => {
      expect(props.onFirstPage.mock.calls.length).toBe(1);
    });

    describe('and second page is displayed', () => {
      beforeEach(() => {
        props.currentPage = 2;
        pagination.update();
      });

      it('enables "first" button', () => {
        expect(pagination.find('.pagination-first').prop('disabled')).toBe(false);
      });

      it('enables "previous" button', () => {
        expect(pagination.find('.pagination-prev').prop('disabled')).toBe(false);
      });

      it('renders current page label', () => {
        expect(pagination.find('.pagination-label').text()).toBe(`Page 2 of ${numPages}`);
      });

      it('enables "next" button', () => {
        expect(pagination.find('.pagination-next').prop('disabled')).toBe(false);
      });

      it('enables "last" button', () => {
        expect(pagination.find('.pagination-last').prop('disabled')).toBe(false);
      });
    });



    describe('and then navigates to last page', () => {

      describe('and then navigates to previous page', () => {

        describe('and then returns to first page', () => {

        });
      });
    });
  });
});