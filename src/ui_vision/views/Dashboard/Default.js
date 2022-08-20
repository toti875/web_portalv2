/*!

=========================================================
* Vision UI PRO Chakra - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-dashboard-pro-chakra
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import React from "react";

// Chakra imports
import {
  Avatar,
  Box,
  AvatarBadge,
  Icon,

  Flex,
  Grid,
  Progress,
  SimpleGrid,
  Spacer,
  Stack,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";

import {
  FaCube,
  FaPencilAlt,

} from "react-icons/fa";

import { Element, Link } from "react-scroll";

import { useSelector } from 'react-redux';

// Custom components
import Card from "../../components/Card/Card.js";
import CardBody from "../../components/Card/CardBody.js";
import CardHeader from "../../components/Card/CardHeader.js";
import BarChart from "../../components/Charts/BarChart";
import LineChart from "../../components/Charts/LineChart";
import PieChart from "../../components/Charts/PieChart";
//import Globe from "../../components/Globe/Globe";
import IconBox from "../../components/Icons/IconBox";
import {
  barChartDataDashboard,
  barChartOptionsDashboard,
  lineChartDataDashboard,
  lineChartOptionsDashboard,
  lineChartDataCharts1,
  lineChartOptionsCharts1,
  lineChartDataCharts2,
  lineChartOptionsCharts2,
  barChartDataCharts1,
  barChartOptionsCharts1,
  pieChartDataCharts1,
  pieChartOptionsCharts1,
 

} from "../../variables/charts";

// Custom icons
import {
  CartIcon,
  DocumentIcon,
  GlobeIcon,
  RocketIcon,
  StatsIcon,
  WalletIcon,
} from "../../components/Icons/Icons.js";

	
import {WalletListScreen, PortfolioValueScreen} from "../../../screens";

import { EstimatedValue } from '../../../containers/Wallets/EstimatedValue';


import { localeDate } from 'helpers';
import { selectUserActivity, selectUserInfo } from 'modules';
import { ProfileActiveStep } from 'containers';

const ProfileAvatar = require ('../../../assets/animation/profile-avatar.gif');

const GetUserEmail = () => {
	const userActivity = useSelector(selectUserActivity);
	const user = useSelector(selectUserInfo);

	const lastLogin = userActivity.find(act => act.action === 'login');
	const ip = lastLogin ? lastLogin.user_ip : '';
	const time = lastLogin ? localeDate(lastLogin.created_at, 'fullDate') : '';

	return (<React.Fragment>{user.email}</React.Fragment>);
}

const GetUserID = () => {
	const userActivity = useSelector(selectUserActivity);
	const user = useSelector(selectUserInfo);

	const lastLogin = userActivity.find(act => act.action === 'login');
	const ip = lastLogin ? lastLogin.user_ip : '';
	const time = lastLogin ? localeDate(lastLogin.created_at, 'fullDate') : '';
  
	return (<>{user.uid}</>);
}

const GetUserLoginInformation = () => {
	const userActivity = useSelector(selectUserActivity);

	const lastLogin = userActivity.find(act => act.action === 'login');
	const ip = lastLogin ? lastLogin.user_ip : '';
	const time = lastLogin ? localeDate(lastLogin.created_at, 'fullDate') : '';

	return (
		
						<div>
							<span>Útimo login: {time} </span>
							<span>IP : {ip} </span>
						</div>
	
	);
};


export default function Default() {
  // Chakra Color Mode
  const iconBoxInside = useColorModeValue("white", "white");
  return (
    <Flex flexDirection='column' pt={{ base: "120px", md: "75px" }}>

      
      
      
      
      
      
      <Grid
        
        gap='26px'
        maxW='100%'
        w='100%'>

        <Stack
          direction='column'
          spacing='16px'
          w='100%'
          mt='24px'
          maxW={{ sm: "315px", md: "100%" }}
          zIndex='0'>
         
          <SimpleGrid columns={{ sm: "1", md: "1" }} spacing='18px' justify='space-between'>
            
          <Card
          w={{ sm: "100%", lg: "100%" }}
          alignSelf={{ lg: "flex-end" }}
          justifySelf={{ lg: "flex-end" }}
          bg='transparent'
          borderRadius='10px'
      
          >
          <Element id='profile' name='profile'>
            <CardBody bg='transparent' >
              <Flex
                direction={{ sm: "column", md: "row" }}
                justify='space-between'
                align='center'
                w='100%'>
                <Flex align='center'>
                <Avatar
                me={{ md: "32px" }}
                src={ProfileAvatar}
                bg='transparent'
                w='128px'
                h='128px'
                borderRadius='8px'>
                <AvatarBadge
                  cursor='pointer'
                  borderRadius='8px'
                  border='transparent'
                  bg='linear-gradient(138.78deg, rgba(6, 11, 40, 0.94) 17.44%, rgba(10, 14, 35, 0.49) 93.55%, rgba(10, 14, 35, 0.69) 93.55%)'
                  boxSize='32px'
                  backdropFilter='blur(120px)'
                  src={ProfileAvatar}
                  >
                  <Icon h='12px' w='12px' color='#fff' as={FaPencilAlt} />
                </AvatarBadge>
              </Avatar>
                  <Flex direction='column'>
                    <Text color='#fff' fontWeight='bold' fontSize='15'>
                      Jeferson Martin
                    </Text>
                    <Text color='#f9a912' fontWeight='500' fontSize='14'>
                      ID: {GetUserID()}
                    </Text>
                    <Text color='gray.400' fontWeight='500' fontSize='14' >
                      {GetUserEmail()}
                    </Text>
                    <Text color='gray.400' fontWeight='500' fontSize='14' >
                      {GetUserLoginInformation()}
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            </CardBody>
          </Element>
        </Card>

        <Card
          w={{ sm: "100%", lg: "100%" }}
          alignSelf={{ lg: "flex-end" }}
          justifySelf={{ lg: "flex-end" }}
          bg='#131538'
          borderRadius='10px'
          >
          <Element id='info' name='info'>
            <CardHeader mb='40px'>
              <Text color='#fff' fontSize='15' fontWeight='bold'>
                Status da Conta
              </Text>
            </CardHeader>
            <CardBody>
              <Flex w='100%' direction={{ sm: "column", md: "row" }}>
        				<ProfileActiveStep />
              </Flex>
            </CardBody>
          </Element>
        </Card>
        </SimpleGrid>    
        <SimpleGrid columns={{ sm: "1", md: "2" }} spacing='24px'>
            <Card minH='83px'  bg='#131538'>
              <CardBody>
                <Flex
                  flexDirection='row'
                  align='center'
                  justify='center'
                  w='100%'>
                  <Stat me='auto'>
                    <StatLabel fontSize='15' color='#fff'  pb='20px' fontWeight='bold'>
                      Patrimônio total
                    </StatLabel>
                    <Flex>
                      <StatNumber fontSize='15' color='#fff'>
                        <PortfolioValueScreen/>
                      </StatNumber>
                    </Flex>
                  </Stat>
                  <IconBox as='box' h={"45px"} w={"45px"} bg='transparent'>
                    <WalletIcon h={"24px"} w={"24px"} color={iconBoxInside} />
                  </IconBox>
                </Flex>
              </CardBody>
            </Card >
            <Card minH='83px' bg='#131538'>
              <CardBody>
                <Flex
                  flexDirection='row'
                  align='center'
                  justify='center'
                  w='100%'>
                  <Stat>
                  <StatLabel fontSize='15' color='#fff'  pb='20px' fontWeight='bold'>
                      Investimentos
                    </StatLabel>
                    <Flex>
                      <Text fontSize='13' color='#fff'>
                        Você possui uma carteira com 5 ativos
                        </Text>
                        <Text fontSize='13' color='#fff'>
                        Total de tokens: 3
                        </Text>
                        <Text fontSize='13' color='#fff'>
                        Total de cripto: 2

                      </Text>
                      <StatHelpText
                        alignSelf='flex-end'
                        justifySelf='flex-end'
                        m='0px'
                        color='red.500'
                        fontWeight='bold'
                        ps='3px'
                        fontSize='sm'>
                        {/* TEXTO PEQUENO */}
                      </StatHelpText>
                    </Flex>
                  </Stat>
                  <Spacer />
                  <IconBox as='box' h={"45px"} w={"45px"} bg='brand.200'>
                    <DocumentIcon h={"24px"} w={"24px"} color={iconBoxInside} />
                  </IconBox>
                </Flex>
              </CardBody>
            </Card>
          </SimpleGrid>

        
        <SimpleGrid columns={{ sm: "1", md: "2" }} spacing='18px' justify='space-between'>

          {/* GRÁFICO 1: RENDIMENTO ACUMULADO NO ANO DA CARTEIRA DO CLIENTE - GRÁFICO DE LINHA */}
          <Card
          w={{ sm: "100%", lg: "100%" }}
          alignSelf={{ lg: "flex-end" }}
          justifySelf={{ lg: "flex-end" }}
          bg='#131538'
          borderRadius='10px'
          >
          <CardHeader mb='34px' px='22px'>
            <Flex direction='column' alignSelf='flex-start'>
            <Text color='#fff' fontSize='15' fontWeight='bold'>
                Rendimento da sua carteira
              </Text>
              <Text fontSize='lg' color='#fff' mb='6px'>
                Variação do rendimento ao longo deste ano 
              </Text>
              <Text fontSize='md' fontWeight='medium' color='gray.400'>
                <Text as='span' color='green.400' fontWeight='bold'>
                  O rendimento acumulado da sua carteira no ano é de: (+25.59%) 
                </Text>{" "}
                De janeiro até hoje
              </Text>
            </Flex>
          </CardHeader>
          <CardBody h='100%'>
          <Box w='100%' minH={{ sm: "300px" }}>
            <LineChart
              chartData={lineChartDataDashboard}
              chartOptions={lineChartOptionsDashboard}
            />
          </Box>
          </CardBody>
        </Card>
        {/* GRÁFICO 2: RENDIMENTO ACUMULADO MES A MES NO ANO DA CARTEIRA DO CLIENTE - GRÁFICO DE BARRAS */}
        <Card
          w={{ sm: "100%", lg: "100%" }}
          alignSelf={{ lg: "flex-end" }}
          justifySelf={{ lg: "flex-end" }}
          bg='#131538'
          borderRadius='10px'
          >
        <CardHeader mb='34px' px='22px'>
        <Flex direction='column' alignSelf='flex-start'>
            <Text color='#fff' fontSize='15' fontWeight='bold'>
                Rendimento da sua carteira
              </Text>
              <Text fontSize='lg' color='#fff' mb='6px'>
                Variação do rendimento ao longo deste ano 
              </Text>
              <Text fontSize='md' fontWeight='medium' color='gray.400'>
                <Text as='span' color='green.400' fontWeight='bold'>
                  O rendimento acumulado da sua carteira no ano é de: (+25.59%) 
                </Text>{" "}
                De janeiro até hoje
              </Text>
            </Flex>
        </CardHeader>
        <CardBody h='100%'>
          <Box w='100%' minH={{ sm: "300px" }}>
            <BarChart
              chartData={barChartDataCharts1}
              chartOptions={barChartOptionsCharts1}
            />
          </Box>
        </CardBody>
      </Card>
        <Card
          w={{ sm: "100%", lg: "100%" }}
          alignSelf={{ lg: "flex-end" }}
          justifySelf={{ lg: "flex-end" }}
          bg='#131538'
          borderRadius='10px'
          >
        <CardHeader mb='34px' px='22px'>
            <Flex direction='column' alignSelf='flex-start'>
            <Text color='#fff' fontSize='15' fontWeight='bold'>
                Rendimento no ano
              </Text>
              <Text fontSize='lg' color='#fff' mb='6px'>
                Rendimento anual da sua carteira x IBOV 
              </Text>
              <Text fontSize='md' fontWeight='medium' color='gray.400'>
                <Text as='span' color='green.400' fontWeight='bold'>
                  {/* TEXTO PARA EXIBIR */}
                </Text>{" "}
                Últimos 7 meses
              </Text>
            </Flex>
        </CardHeader>
        <CardBody h='100%'>
          <Box w='100%' minH={{ sm: "300px" }}>
            <LineChart
              chartData={lineChartDataCharts1}
              chartOptions={lineChartOptionsCharts1}
            />
          </Box>
        </CardBody>
      </Card>
        
      <Card
          w={{ sm: "100%", lg: "100%" }}
          alignSelf={{ lg: "flex-end" }}
          justifySelf={{ lg: "flex-end" }}
          bg='#131538'
          borderRadius='10px'
          >
        <CardHeader mb='34px' px='22px'>
            <Flex direction='column' alignSelf='flex-start'>
            <Text color='#fff' fontSize='15' fontWeight='bold'>
                Rendimento no ano
              </Text>
              <Text fontSize='lg' color='#fff' mb='6px'>
                Rendimento anual da sua carteira x HDAI 
              </Text>
              <Text fontSize='md' fontWeight='medium' color='gray.400'>
                <Text as='span' color='green.400' fontWeight='bold'>
                  {/* TEXTO PARA EXIBIR */}
                </Text>{" "}
                Últimos 7 meses
              </Text>
            </Flex>
        </CardHeader>
        <CardBody h='100%'>
          <Box w='100%' minH={{ sm: "300px" }}>
            <LineChart
              chartData={lineChartDataCharts2}
              chartOptions={lineChartOptionsCharts2}
            />
          </Box>
        </CardBody>
      </Card>

      <Card
          w={{ sm: "100%", lg: "100%" }}
          alignSelf={{ lg: "flex-end" }}
          justifySelf={{ lg: "flex-end" }}
          bg='#131538'
          borderRadius='10px'
          >
        <CardHeader mb='34px' px='22px'>
          <Text color='#fff' fontSize='lg' fontWeight='bold'>
            Composição da sua carteira na FORTEM (%)
          </Text>
        </CardHeader>
        <CardBody h='100%'>
          <Box w='100%' minH={{ sm: "300px" }}>
            <PieChart
              chartData={pieChartDataCharts1}
              chartOptions={pieChartOptionsCharts1}
            />
          </Box>
        </CardBody>
      </Card>
        </SimpleGrid>
        </Stack>
      </Grid> 
    </Flex>
  );
}
