import Logo from './Logo';
import SearchBar from './SearchBar'
import { Link as RouterLink } from 'react-router-dom';
import { Flex, useDisclosure, Link, Text, Icon } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { BiHomeCircle, BiMap, BiChevronDown, BiCart } from 'react-icons/bi'

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex className='NavBar'
      color='gray.600'
      w='100%' h='100%'
      px={5}
      direction={'column'} alignItems='center'
      boxShadow='base'
    >
      {/* *********************** */}
      <Flex className='row1'     
        flexDirection='row' 
        w='100%' maxW='1200px' h='70%'
      >
        <Flex className='logo-container'
          w={{base:'30%', md:'25%'}}
          justifyContent='left' 
          alignItems='center' 
          >
          <Logo />
        </Flex>

        <Flex className='search-container' 
          w='50%'
          justify='center' 
          alignItems='center'
          >
          <SearchBar />
        </Flex>

        <Flex className='cart-icon' 
          w={{base:'20%', md:'25%'}} h='100%'
          mt='8px'
          justifyContent='right' alignItems='center'
          >
          <Icon as={ BiCart } 
            w='25px' h='25px'
          />
        </Flex>
      </Flex>
      {/* ********************** */}
      <Flex className='row2'
        w='100%' maxW='1200px' h='30%'
        flexDirection='row'
        >
        <Flex 
          w={{base:'100%', md:'30%',lg:'25%'}} h='100%'
          justifyContent='left' alignItems='center'
        >
          <Flex w={{base:'70%', md:'100%'}}>
            <Icon as={ BiMap } w='18px' h='18px' color='gray.500' />          
            <Text fontSize={{base:'.8em', lg:'1em'}} color='gray.500'>
              Capital Federal
            </Text>
            <Icon as={ BiChevronDown } 
            w='20px' h='20px' marginLeft={{base:'5px', md:'15px'}} color='gray.500'
            />
          </Flex>
          <Flex w={{base:'30%'}} justify='right'> 
            {isOpen ? (
              <CloseIcon 
                onClick={isOpen ? onClose : onOpen}
                display={{ base: 'inline', md: 'none' }}              
              />
            ) : (
            <HamburgerIcon w='20px' h='20px'
              onClick={isOpen ? onClose : onOpen}
              display={{ base: 'inline', md: 'none' }}
            />          
            )}
          </Flex> 
        </Flex>

        <Flex className='menu-container'          
          w={{md:'70%',lg:'75%'}} h={{base:'300px',md:'100%'}}
          display={{ base: isOpen ? "flex" : "none", sm: "flex" }}
          dir={{base:'column', md:'row'}} alignItems='center' justify={{base:'center', md:'left'}}
          >
                  
          <Flex className='home-menu-login'
            w='100%'
            alignItems='center' justify='left'
            >
            <Link className='home'
              w='30%'
              color='gray.600'
              display='flex' flexDir='row' alignItems='center' justify='left'
              style={{ textDecoration: 'none' }}       
              as={RouterLink} to='/'
              _hover={{
                color:'blue.shop',
              }}
              > 
              <Icon as={ BiHomeCircle } 
                w='18px' h='18px' marginRight='5px'
              />
              <Text>            
                Home
              </Text>
            </Link>
            <Flex className='menu'
            w='70%'            
              alignItems='center' justifyContent='left'>
              <Link className='women'
                alignItems='center'
                style={{ textDecoration: 'none' }}
                color='gray.600'
                as={RouterLink} to='/'
                _hover={{
                  color:'blue.shop',
                }}
                > 
                <Text marginRight='15px'>
                  Women
                </Text>
              </Link>
              <Link className='men'
                alignItems='center'
                style={{ textDecoration: 'none' }}
                variant='outline'
                color='gray.600'
                as={RouterLink}
                to='/'
                _hover={{
                  color:'blue.shop',
                }}
                > 
                <Text marginRight='15px'>
                  Men
                </Text>
              </Link>
              <Link className='kids'
                alignItems='center'
                style={{ textDecoration: 'none' }}
                variant='outline'
                color='gray.600'
                as={RouterLink}
                to='/'
                _hover={{
                  color:'blue.shop',
                }}
                > 
                <Text marginRight='15px'>
                  Kids
                </Text>
              </Link>
            </Flex>         
          </Flex>
          <Flex className='login-container'
            display={{ base: isOpen ? "flex" : "none", md: "flex" }}
            w='30%' h='100%' 
            justifyContent='right' alignItems='center' 
            >
              <Link className='login'
                alignItems='center'
                style={{ textDecoration: 'none' }}
                as={RouterLink} to='/'
                _hover={{
                  color:'blue.shop',
                }}
                > 
                <Text marginLeft='20px'>
                  Login
                </Text>
              </Link>
              <Link className='sign-up'
                alignItems='center'
                style={{ textDecoration: 'none' }}
                as={RouterLink} to='/'
                _hover={{
                  color:'blue.shop',
                }}
                > 
                <Text marginLeft='20px'>
                  Sign Up
                </Text>
              </Link>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};


export default NavBar;
