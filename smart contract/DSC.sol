pragma solidity ^0.4.0;

contract DeviceSnapshot{
    
    mapping(address => bytes32) Logkey;
    
    function SetLogkey(address _addr, bytes32 _logkey) public {
            
        Logkey[_addr] = _logkey;
    } 
    
    function Lastlogkey(address _addr) public constant returns(bytes32 _res){
        
        _res = Logkey[_addr];
    }
}