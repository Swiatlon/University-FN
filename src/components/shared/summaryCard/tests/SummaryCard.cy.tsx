import SummaryCard from '../SummaryCard';

describe('SummaryCard Component', () => {
  const defaultProps = {
    icon: <div data-cy="icon">ICON</div>,
    title: 'Test title',
    text: 'This is a test summary card',
    color: '#ff0000',
  };

  const elements = {
    title: () => cy.getDataCy('card-title'),
    text: () => cy.getDataCy('card-text'),
    icon: () => cy.getDataCy('icon'),
  };

  it('renders correctly with default props', () => {
    cy.mount(<SummaryCard {...defaultProps} />);

    elements.title().should('exist').and('have.text', defaultProps.title);
    elements.text().should('exist').and('have.text', defaultProps.text);
    elements.icon().should('exist').and('have.css', 'color', 'rgb(255, 0, 0)');
  });

  it('applies custom styles from the sx prop', () => {
    const customStyles = { margin: '20px', padding: '10px' };
    cy.mount(<SummaryCard {...defaultProps} sx={customStyles} />);

    cy.getDataCy('card-container').should('have.css', 'margin', '20px');
    cy.getDataCy('card-container').should('have.css', 'padding', '10px');
  });
});
