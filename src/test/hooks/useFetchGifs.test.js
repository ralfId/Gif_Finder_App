import {renderHook} from '@testing-library/react-hooks'
import {useFetchGifs} from '../../hooks/useFetchGifs'

describe('Pruebas en useFetchGifs.js', () => {
    
    test('Debe retornar el estado inicial', async() => {
        
        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs('one piece') );
        const {data, loading} = result.current;

        await waitForNextUpdate()
       
        expect(data).toEqual([])
        expect(loading).toBe(true)
    });

    test('Debe de retornar un arreglo de imagenes ', async() => {
        const { result, waitForNextUpdate } = renderHook(()=> useFetchGifs('One piece'));
        await waitForNextUpdate();

        const { data, loading } = result.current;

        expect( data.length ).toBe( 10 );
        expect( loading ).toBe( false );

    });
    
});