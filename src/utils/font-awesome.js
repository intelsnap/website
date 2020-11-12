import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faEnvelope } from '@fortawesome/free-solid-svg-icons'

import {
  faTwitter,
  faLinkedin,
  faGithub,
  faSlack,
  faYoutube,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'

library.add(
  faCoffee,
  faTwitter,
  faLinkedin,
  faGithub,
  faSlack,
  faYoutube,
  faEnvelope,
  faInstagram
)
//   library. for adding from libray we use
// syntax  {/* <FontAwesomeIcon icon={[{"fab","linkedin"]} size="2x" /> */} fa for font awesom and b for brand;
// without library syntax is <FontAwesomeIcon icon={faGithub} size="2x" />
/* <FontAwesomeIcon icon={faGithub} size="2x" />
<FontAwesomeIcon icon={faSlack} size="2x" />
<FontAwesomeIcon icon={faYoutube} size="2x" />
<FontAwesomeIcon icon={faEnvelope} size="2x" />
*/
