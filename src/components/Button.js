import { TouchableOpacity, Text ,Image} from "react-native";
import Style from "../Style/Style";
const Button = ({ onPress, title ,style ,titilestyle}) => (
    <TouchableOpacity onPress={onPress} style={style}>
      <Text style={[Style.ButtonText ,titilestyle]}>{title}</Text>
    
    </TouchableOpacity>

  );

  
  export default Button;