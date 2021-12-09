pragma solidity ^0.4.0;

contract Register{
    
    uint8 DeviceCount;
    
    uint8 ContractCount;
    
    mapping(address => bool) private Status;
    
    mapping(address => string) private Type;

    //Add new trusted addressInfo into trusted address list
    function AddTAL(address _addr, string _type) public {
        
        if(keccak256(_type) == keccak256("Device")){
            
            DeviceCount++;
            
        }else if(keccak256(_type) == keccak256("Contract")){
            
            ContractCount++;
            
        }
        
        Status[_addr] = true;
        
        Type[_addr] = _type;
        
    }
    
    //Modify existed addressInfo in trusted address list
    function ModifyTAL(address _addr, bool _credible) public {
        
        if(keccak256(Type[_addr]) == keccak256("Device")){
            
            DeviceCount--;
            
        }else if(keccak256(Type[_addr]) == keccak256("Contract")){
            
            ContractCount--;
            
        }
        
        Status[_addr] = _credible;
        
    }
    
    //Determine if the device or contract is trusted
    function Credibility(address _addr) public constant returns(bool _res){

        _res = false;
        
        if(Status[_addr]){
            
            _res = true;
            
        }
    }
}


