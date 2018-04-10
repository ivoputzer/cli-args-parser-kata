import java.util.HashMap;
import java.util.Map;

public class CliArgsParser {

	private Map<Object, Object> map = new HashMap<Object, Object>();
	private Object[] args;

	public String parse(String input) {
		Object[] splitted = input.split(" ");
		return parse(splitted);
	}
	
	public String parse(Object[] input) {
		
		args = input;		
		
		for(int i = 0; i < args.length; i++) {
			if(isSimple(i)) {
				map.put(removeMinus((String) args[i]), true);
			} else {
				map.put(removeMinus((String) args[i]), args[i+1]);
				i++;
			}
		}
		
		return map.toString();

	}
	
	private boolean isSimple(int i) {
		if((i+1) < args.length) {
			if(args[i+1] instanceof Integer) {
				return false;
			}
			if(((String) args[i+1]).startsWith("--")) {
				return true;
			} else {
				return false;
			}			
		}
		return true;
	}
	
	private String removeMinus(String old) {
		return new String (old.replaceFirst("(--)", ""));
	}

}
