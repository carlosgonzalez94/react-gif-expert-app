import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from '@testing-library/react-hooks'

describe('Test of the hook useFetchGifs', () => {

    test('[useFetchGifs] should return the initial state', async () => {
        const { result, waitForNextUpdate } = renderHook( () =>  useFetchGifs( 'One Punch' ));
        const { data, loading } = result.current;

        await waitForNextUpdate();

        expect(data).toEqual([]);
        expect(loading).toBeTruthy();
    });

    test('[useFetchGifs] should return an array of imgs and the loading as false', async () => {
        const { result, waitForNextUpdate } = renderHook( () =>  useFetchGifs( 'One Punch' ));

        await waitForNextUpdate();
        
        const { data, loading } = result.current;
        expect(data.length).toBe(10);
        expect(loading).toBeFalsy();
    });
    
    
})
