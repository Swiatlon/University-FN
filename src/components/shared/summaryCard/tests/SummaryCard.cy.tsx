import SummaryCard from '../SummaryCard';

describe('SummaryCard Component', () => {
  const defaultProps = {
    icon: <div data-test="icon">ICON</div>,
    title: 'Test title',
    text: 'This is a test summary card',
    color: '#ff0000',
  };

  it('renders correctly with default props', () => {
    cy.mount(<SummaryCard {...defaultProps} />);

    cy.contains('Test title').should('exist');
    cy.contains('This is a test summary card').should('exist');

    cy.get('[data-test="icon"]').should('exist').and('have.css', 'color', 'rgb(255, 0, 0)');
  });

  it('applies custom styles from the sx prop', () => {
    const customStyles = { margin: '20px', padding: '10px' };
    cy.mount(<SummaryCard {...defaultProps} sx={customStyles} />);

    cy.get('[data-cy="card-container"]').should('have.css', 'margin', '20px');
    cy.get('[data-cy="card-container"]').should('have.css', 'padding', '10px');
  });
});
