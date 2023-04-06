import { render, screen } from "@testing-library/react"
import {  GifGrid } from '../../src/components';
import { useFetchGifs } from "../../src/hooks/useFetchGifs";
jest.mock('../../src/hooks/useFetchGifs');
describe('Pruebas en <GifGrid/>', () => {
    const category = 'One Punch'; 
    test('debe de mostrar el loading iniciamente', () => { 
        useFetchGifs.mockReturnValue({
            images:[],
            isLoading: true,
        })

        render(<GifGrid category={ category }/>);
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
        screen.debug()
    });

    test('debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => { 
        const gifs = [
            {
                id: 'abc',
                title: 'Saitama',
                url: 'https://localhost:8080/saitama.jpg'
            },
            {
                id: 'abcd',
                title: 'Goku',
                url: 'https://localhost:8080/goku.jpg'
            }
        ];
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: true,
        });

        render(<GifGrid category={category}/>);
        expect( screen.getAllByRole('img').length).toBe(2);
     })
})