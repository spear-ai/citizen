<div align="center">
  <p>
    <img alt="Logo" src="badge.svg" width="192">
  </p>
  <p>
    <b>Spear AI Code Citizen</b>
  </p>
  <quote>
    <p>
      “This code is what it is because of its citizens” — Plato
    </p>
  </quote>
</div>

# Goal

Decrease net cognitive complexity for developers.

# Assumptions

The rules in this guide are intended to work well with the following assumptions:

## Read & Write

Developers read code more than they write code, and internal developers write code more than outside collaborators:

* Readability > Writeability
* Writeability for *internal* developers > Writeability for outside collaborators

## Screen size

Developers have medium–large displays:

* Long lines are less likely to wrap

## GitHub

Developers use GitHub:

* Side-by-side line diffs are **119** characters long

## VSCode

Developers use VSCode:

* Auto-formatting, auto-linting, and code completion reduces keystrokes

# Legend

[!] Indicates that a rule is controversial.

# Rules

## Language

**TODO:** Fill me out

## Files

**TODO:** Fill me out

## Comments

### 2.a. DO communicate intent

Comments should explain intent rather than what the code is doing.
If it's unclear what the code is doing then it should be refactored.

### 2.b. DO show examples

Do show examples when possible.

**js:**

```ts
// Get a unit's globally unique identifier.
//
// (“Zumwalt-class destroyer”, 3) → “Unit:ZumwaltClassDestroyer:3”
// (“Leopard 2A7”, 5) → “Unit:Leopard2a7:5”
const getUnitId(name: string, index: number) => (
  `Unit:${pascalCase(name)}:${index} 
);
```

### 2.c. DO use sentence case

Do use [sentence case](https://apastyle.apa.org/style-grammar-guidelines/capitalization/sentence-case) in comments.

**py:**

```py
#  ✓ Good
#  Use Manhattan distance because it performs better on high dimensional data
distance = scipy.spatial.distance.cdist(tensor_a, tensor_b, metric='cityblock')

#  ✗ Bad
#  use manhattan distance because it performs better on high dimensional data
distance = scipy.spatial.distance.cdist(tensor_a, tensor_b, metric='cityblock')
```

**js:**

```ts
// ✓ Good
// Choose a background color that matches the sky
const backgroundColor = '#2ebde5'; // Azure

// ✗ Bad
// choose a background color that matches the sky
const backgroundColor = '#2ebde5'; // azure
```

### 2.d. DO punctuate multi-line comments

Do use punctuation on multi-line comments.

**py:**

```py
#  ✓ Good
#  Lorem ipsum dolor sit amet. Consectetur adipiscing elit.
placeholder_text = …

#  ✗ Bad
#  Lorem ipsum dolor sit amet. Consectetur adipiscing elit
placeholder_text = …

#  ✗ Bad
#  Lorem ipsum dolor sit amet
#  Consectetur adipiscing elit
placeholder_text = …
```

#

### 2.d. DO punctuate documentation-as-code

Do punctuate comments that serve as documentation.
These comments often generate Website docs, CLI arguments, etc.

```py
@dataclass
class FetchBananasResponse
    """The API response for fetching bananas."""
    
    banana_list: List[Banana]
    """A list of varying length bananas."""

@dataclass
class Banana:
    """An irresistible fruit loved by all the great apes."""

    is_ripe: bool
    """Whether it is ready for eating."""

    length: float
    """The length in meters."""
```

### 2.f. DO inline short comments

```py
# ✓ Good
speed = … #  Meters per hour
time = … #  Minutes
distance = speed / (time / 60) # Meters 
```

```py
# ✗ Bad

#  Meters per hour
speed = … 

#  Minutes
time = … 

# Hours
distance = speed / (time / 60) 
```

## Variables

### 3.a. DO follow casing conventions

Follow the casing conventions of the current language.

**json:**

```json
{
  "boundingBox": [0, 0, 10, 10]
}
```

**python:**

```py
bounding_box = [0, 0, 10, 10]
```

**rust:**

```rust
let bounding_box: [i32; 4] = [0, 0, 10, 10];
```

**typescript:**

```ts
const boundingBox = [0, 0, 10, 10];
```

### 3.b. DO favor readability to brevity

Do favor readability to brevity.

```py
# ✓ Good
docker_image = "huggingface/transformers-pytorch-gpu"
ec2_instance_type = "p3.8xlarge"

# ✗ Bad
image = "huggingface/transformers-pytorch-gpu"
type = "p3.8xlarge"
```

### 3.c. DO group with a prefix

Do group related variables with a prefix.

```py
# ✓ Good
cnn_kernel = (3, 3)
cnn_stride = (1, 1)
learning_rate = 1e-05

# ✗ Bad
kernel = (3, 3)
stride = (1, 1)
learning_rate = 1e-05
```

### 3.d. DO space out pre/post-fixes

Do insert a space before postfixes and after prefixes.

```py
# ✓ Good
hidden_layer_0 = "…"
hidden_layer_1 = "…"

# ✗ Bad
hidden_layer0 = "…"
hidden_layer1 = "…"
```

```ts
// ✓ Good
const userName = '…';
const userPassword = '…';

// ✗ Bad
const username = '…';
const userPassword = '…';
```

### 3.e. DON’T use abbreviations

Don’t use abbreviations. They’re more likely to encounter naming conflicts.
They must also be be learned and memorized.

```py
# ✓ Good
directory = "data/units"
unit_direction = "NORTH"

# ✗ Bad
dir = "data/units"
unit_dir = "NORTH"
```

```py
# ✓ Good
result, error = action()
response = request()

# ✗ Bad
res, err = action()
res = req()
```

```py
# ✓ Good
sagemaker = SageMaker()
hyperparameters = {…}

# ✗ Bad
sm = SageMaker()
hparams = {…}
```

### 3.f. DO use acronyms

Do use acronyms and initialisms. They’re well known and less verbose.
Moreover, the words they represent are often unknown; so must be learned and memorized

```py
# ✓ Good
nato_classification = "cosmic"
radar_range = 1_700_150  # meters

# ✗ Bad
north_atlantic_treaty_organization_classification = "cosmic"
radio_detection_and_ranging_range = 1_700_150  # meters
```

```py
# ✓ Good
s3_bucket = "secret-stuff"
website_url = "https://spear.ai"

# ✗ Bad
simple_storage_service_bucket = "secret-stuff"
website_uniform_resource_locator = "https://spear.ai"
```

### 3.g. DON’T invent acronyms

Don’t invent acronyms or initialisms *unless* external users would find it easier to use.
They’re *not* well known; so must be learned and memorized.

```py
# ✓ Good
aerial_unit_direction = (0.8, 0.45)
aerial_unit_speed = 329

# ✗ Bad
au_direction = (0.8, 0.45)
au_speed = 329
```

```py
# ✓ Good
rcn_has_attention = True
rcn_hidden_layer_size = 40

# ✗ Bad
really_cool_network_has_attention = True
really_cool_network_hidden_layer_size = 40
```

### 3.h. DO add type hints

Do add type hints. Many names are ambiguous and can be confused for booleans, dates, functions, etc.

**python:**

```py
# ✓ Good
created_date = "1776-07-04T04:56:02.000Z"
was_published = True

# ✗ Bad
created = "1776-07-04T04:56:02.000Z"
published = True
```

**typescript:**

```ts
// ✓ Good
fileBuffer = await fs.readFile(…);
isLoaded = false;

// ✗ Bad
file = await fs.readFile(…);
loaded = false;
```

### 3.i. DO differentiate types

Do differentiate types. It’s hard to switch between contexts when variable names represent different types.

```py
# ✓ Good
url = "https://spear.ai"
parsed_url = urlparse("https://spear.ai")

# ✗ Bad
url = "https://spear.ai"
url = urlparse("https://spear.ai")
```

```py
# ✓ Good
agent_id = "10"
agent = Agent(id="10", type=Tiger)

# ✗ Bad
agent = "10"
agent = Agent(id="10", type=Tiger)
```

### 3.j. DON’T add type definitions

Don’t add type definitions.

Reasons:

* They add superfluous information
* They increase refactoring costs
* They decrease portability

```py
# ✓ Good
age = 21
confidence = 0.9

# ✗ Bad
age_int = 21
confidence_float = 0.9
```

```ts
// ✓ Good
const balance = BigInt(7_301_985);
const mask = Uint8Array();

// ✗ Bad
const bigIntBalance = BigInt(7_301_985);
const maskUint8Array = Uint8Array();
```

### 3.k. DO use boolean verbs

Do use appropriate boolean verbs.

```py
# ✓ Good
can_delete = True
has_feature = True
should_reset = True

# ✗ Bad
is_deletable = True
features = True
reset = True
```

### 3.l. DO be positive

Do be positive with boolean variables.

**python:**

```py
# ✓ Good
is_enabled = True
is_visible = False

# ✗ Bad
is_disabled = False
is_not_visible = True
```

**tsx:**

```tsx
// ✓ Good
<Tab isActive>
  Click me
</Tab>

// ✗ Bad
<Tab isInactive={false}>
  Click me
</Tab>
```

### 3.m. DO use correct tense

Do use the correct tense.

```py
if was_suspended and not is_suspended:
    print("Welcome back!")
```

### 3.n. DON’T pluralize collections [[!]](#Legend)

Don’t pluralize collections. Instead, specify the collection type.

Some object names are already plural. Therefore, it’s impossible to name a collection of those objects.  
Moreover, [Uncountable nouns](https://en.wikipedia.org/wiki/Mass_noun) can’t be pluralized.

Specifying the collection type also clarifies which operations are allowed.
For example, a `List` can be appended or prepended to. Whereas, a `Set` can be added or removed from.

```py
# ✓ Good
equipment_list = [{…}, {…}, …, {…}]
equipment = equipment_list[0]

# ✗ Bad
equipment = [{…}, {…}, …, {…}]
equipment = equipment[0]
```

```py
# ✓ Good
settings_map = {"0": {…}, "1": {…}, …, "n": {…}]
settings = settings_map["0"]

# ✗ Bad
settings = {"0": {…}, "1": {…}, …, "n": {…}]
settings = settings["0"]
```

```py
# ✓ Good
id_list = ["0", "1", "2", "0"]
id_list.append("2")
id_set = set(id_list)

# ✗ Bad
ids = ["0", "1", "2", "0"]
ids.append("2")
distinct_ids = set(ids)
```

```console
# ✓ Good
curl https://api.spear.ai/user
curl https://api.spear.ai/user/5

# ✗ Bad
curl https://api.spear.ai/users
curl https://api.spear.ai/users/5
```

```sql
-- ✓ Good
SELECT * FROM Person
SELECT * FROM PersonAddress

-- ✗ Bad
SELECT * FROM People
SELECT * FROM PeopleAddresses
```
