import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import RangeSelector from '../RangeSelector';
// import "../../../../index.css";
// import "../RangeSelector.css";

describe('RangeSelector', () => {
    test('should render the component without errors', () => {
      render(<RangeSelector />);
    });
})