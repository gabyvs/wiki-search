import React          from 'react';
import {
  shallow,
  ShallowWrapper }    from 'enzyme';
import
  Pagination,
  { PaginationProps } from './Pagination';

interface PaginationPropsTest extends PaginationProps {
  onFirstPage: jest.Mock;
  onPrevPage: jest.Mock;
  onNextPage: jest.Mock;
  onLastPage: jest.Mock;
}

describe('Pagination', () => {
  let pagination: ShallowWrapper;
  let props: PaginationPropsTest;
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
      pagination.find('.pagination-next').simulate('click');
    });

    it('calls "onFirstPage"', () => {
      expect(props.onNextPage.mock.calls.length).toBe(1);
    });

    describe('and second page is displayed', () => {
      beforeEach(() => {
        pagination.setProps({ currentPage: 2 });
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

      describe('and then navigates to last page', () => {
        beforeEach(() => {
          pagination.find('.pagination-last').simulate('click');
        });

        it('calls "onLastPage"', () => {
          expect(props.onLastPage.mock.calls.length).toBe(1);
        });

        describe('and last page is displayed', () => {
          beforeEach(() => {
            pagination.setProps({currentPage: 5});
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
            expect(pagination.find('.pagination-next').prop('disabled')).toBe(true);
          });

          it('enables "last" button', () => {
            expect(pagination.find('.pagination-last').prop('disabled')).toBe(true);
          });

          describe('and then navigates to previous page', () => {
            beforeEach(() => {
              pagination.find('.pagination-prev').simulate('click');
            });

            it('calls "onPrevPage"', () => {
              expect(props.onPrevPage.mock.calls.length).toBe(1);
            });

            describe('and previous page is displayed', () => {
              beforeEach(() => {
                pagination.setProps({currentPage: 4});
              });

              it('enables "first" button', () => {
                expect(pagination.find('.pagination-first').prop('disabled')).toBe(false);
              });

              it('enables "previous" button', () => {
                expect(pagination.find('.pagination-prev').prop('disabled')).toBe(false);
              });

              it('renders current page label', () => {
                expect(pagination.find('.pagination-label').text()).toBe(`Page 4 of ${numPages}`);
              });

              it('enables "next" button', () => {
                expect(pagination.find('.pagination-next').prop('disabled')).toBe(false);
              });

              it('enables "last" button', () => {
                expect(pagination.find('.pagination-last').prop('disabled')).toBe(false);
              });

              describe('and then navigates to first page', () => {
                beforeEach(() => {
                  pagination.find('.pagination-first').simulate('click');
                });

                it('calls "onFirstPage"', () => {
                  expect(props.onFirstPage.mock.calls.length).toBe(1);
                });
              });
            });
          });
        });
      });
    });
  });
});