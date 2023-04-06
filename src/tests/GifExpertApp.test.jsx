import { render, screen } from "@testing-library/react"
import { GifExpertApp } from '../src/GifExpertApp';

describe('Pruebas en <GifExpertApp/>', () => { 
    test('debe de hacer math con el snapshot', () => {
        const { container } = render(<GifExpertApp/>);
        expect(container).toMatchSnapshot();
    })
})