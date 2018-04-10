import static org.junit.Assert.*;
import org.junit.Test;


public class CliArgsParserTest {
	
	CliArgsParser parser = new CliArgsParser();

	@Test
	public void parseSimpleFlag() {
		Object[] input = {"--foo"};
		String output = parser.parse(input);
		assertEquals("{foo=true}", output);
	}
	
	@Test
	public void parseSimpleFlagInputIsString() {
		String input = "--foo";
		String output = parser.parse(input);
		assertEquals("{foo=true}", output);
	}
	
	@Test
	public void parseCompositeFlag() {
		Object[] input = {"--foo", "bar"};
		String output = parser.parse(input);
		assertEquals("{foo=bar}", output);
	}
	
	@Test
	public void parseCompositeFlagInputIsString() {
		String input = "--foo bar";
		String output = parser.parse(input);
		assertEquals("{foo=bar}", output);
	}
	
	
	@Test
	public void parseCompositeFlagWithInteger() {
		Object[] input = {"--number", 1};
		String output = parser.parse(input);
		assertEquals("{number=1}", output);
	}
	
	@Test
	public void parseCompositeFlagWithIntegerInputIsString() {
		String input = "--number 1";
		String output = parser.parse(input);
		assertEquals("{number=1}", output);
	}
	
	@Test
	public void parseMultipleFlags() {
		Object[] input = {"--foo", "--bar", "baz", "--number", 1};
		String output = parser.parse(input);
		assertEquals("{number=1, bar=baz, foo=true}", output);
	}
	
	@Test
	public void parseMultipleFlagsInputIsString() {
		String input = "--foo --bar baz --number 1";
		String output = parser.parse(input);
		assertEquals("{number=1, bar=baz, foo=true}", output);
	}	

}
