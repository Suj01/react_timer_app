import { Box, Button, Center, HStack, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export const Timer = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);


    useEffect(() => {
        let timerId;

        const interval = () => {
            setTime(prevTime => prevTime + 1);
            timerId = setTimeout(interval, 1000);
        };

        if (isRunning) {
            interval();
        } else {
            clearTimeout(timerId);
        }

        return () => clearTimeout(timerId);
    }, [isRunning]);

    useEffect(() => {
        if (time === 60) {
            alert('1 minute has passed!');
        }
    }, [time]);

    const formatTime = (time) => {
        const getSeconds = `0${time % 60}`.slice(-2);
        const minutes = `${Math.floor(time / 60)}`;
        const getMinutes = `0${minutes % 60}`.slice(-2);
        const getHours = `0${Math.floor(time / 3600)}`.slice(-2);
        return `${getHours}:${getMinutes}:${getSeconds}`;
    };

    const startTimer = () => {
        setIsRunning(true);
    };
    const stopTimer = () => {
        setIsRunning(false);
        setTime(0);
    };
    const pauseTimer = () => {
        setIsRunning(false);
    };
    const resetTimer = () => {
        setIsRunning(false);
        setTime(0);
    };

    return (
        <>
            <Center>
                <Heading mt={10} color={"orangered"}>React Timer App</Heading>
            </Center>
            <Center>
                <Box mt={10} p={10} border={"5px solid orangeRed"} maxW="90%" >
                    <Center>
                        <Heading>{formatTime(time)}</Heading>
                    </Center>
                    <HStack mt={10} flexWrap="wrap" justify="center">
                        <Button
                            size="md"
                            m={2}
                            height={["40px", "48px"]}
                            width={["120px", "200px"]}
                            border="2px"
                            borderColor="green.500"
                            onClick={startTimer}
                        >
                            Start
                        </Button>
                        <Button
                            size="md"
                            m={2}
                            height={["40px", "48px"]}
                            width={["120px", "200px"]}
                            border="2px"
                            borderColor="green.500"
                            onClick={stopTimer}
                        >
                            Stop
                        </Button>
                        <Button
                            size="md"
                            m={2}
                            height={["40px", "48px"]}
                            width={["120px", "200px"]}
                            border="2px"
                            borderColor="green.500"
                            onClick={pauseTimer}
                        >
                            Pause
                        </Button>
                        <Button
                            size="md"
                            m={2}
                            height={["40px", "48px"]}
                            width={["120px", "200px"]}
                            border="2px"
                            borderColor="green.500"
                            onClick={resetTimer}
                        >
                            Reset
                        </Button>

                    </HStack>

                </Box>
            </Center>
        </>
    );
};
