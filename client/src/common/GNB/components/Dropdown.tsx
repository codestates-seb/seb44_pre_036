import {
  Container1,
  Container2,
  Container3,
  Container4,
  InBox,
  Content,
  MessageButton,
  InBoxIn,
  Mark,
  ContentItem,
  ContentItem2,
  ContentItem3,
} from './DropdownStyles';

interface DropdownProps {
  Id: number;
}

function Dropdown({ Id }: DropdownProps): JSX.Element | null {
  let containerContent: JSX.Element | undefined;

  if (Id === 1) {
    containerContent = (
      <Container1>
        <InBox>
          <button>
            <h3>INBOX (ALL)</h3>
          </button>
          <InBoxIn>
            <Mark>
              <button>Mark all as read</button>
            </Mark>
          </InBoxIn>
        </InBox>
        <Content>
          <ul>
            <li>
              <MessageButton>
                <img src="/header_svg/message2.svg" />
              </MessageButton>
              <ContentItem>
                <img src="/header_svg/slogo.svg" />
              </ContentItem>
              <ContentItem2>
                <p>Welcome</p>
                <ContentItem3>
                  <p>
                    Welcome to Stack Overflow! Take the 2-minute site tour to
                    earn your first badge
                  </p>
                </ContentItem3>
              </ContentItem2>
            </li>
          </ul>
        </Content>
      </Container1>
    );
  } else if (Id === 2) {
    containerContent = (
      <Container2>
        <InBox>
          <button>
            <h3>TROPHY BOX (ALL)</h3>
          </button>
          <InBoxIn>
            <Mark>
              <button>Mark all as read</button>
            </Mark>
          </InBoxIn>
        </InBox>
        <Content>
          <ul>
            <li>
              <MessageButton>
                <img src="/header_svg/message2.svg" />
              </MessageButton>
              <ContentItem>
                <img src="/header_svg/slogo.svg" />
              </ContentItem>
              <ContentItem2>
                <p>Welcome</p>
                <ContentItem3>
                  <p>
                    Welcome to Stack Overflow! Take the 2-minute site tour to
                    earn your first badge
                  </p>
                </ContentItem3>
              </ContentItem2>
            </li>
          </ul>
        </Content>
      </Container2>
    );
  } else if (Id === 3) {
    containerContent = (
      <Container3>
        <InBox>
          <button>
            <h3>HELP BOX (ALL)</h3>
          </button>
          <InBoxIn>
            <Mark>
              <button>Mark all as read</button>
            </Mark>
          </InBoxIn>
        </InBox>
        <Content>
          <ul>
            <li>
              <MessageButton>
                <img src="/header_svg/message2.svg" />
              </MessageButton>
              <ContentItem>
                <img src="/header_svg/slogo.svg" />
              </ContentItem>
              <ContentItem2>
                <p>Welcome</p>
                <ContentItem3>
                  <p>
                    Welcome to Stack Overflow! Take the 2-minute site tour to
                    earn your first badge
                  </p>
                </ContentItem3>
              </ContentItem2>
            </li>
          </ul>
        </Content>
      </Container3>
    );
  } else if (Id === 4) {
    containerContent = (
      <Container4>
        <InBox>
          <button>
            <h3>LISTBOX (ALL)</h3>
          </button>
          <InBoxIn>
            <Mark>
              <button>Mark all as read</button>
            </Mark>
          </InBoxIn>
        </InBox>
        <Content>
          <ul>
            <li>
              <MessageButton>
                <img src="/header_svg/message2.svg" />
              </MessageButton>
              <ContentItem>
                <img src="/header_svg/slogo.svg" />
              </ContentItem>
              <ContentItem2>
                <p>Welcome</p>
                <ContentItem3>
                  <p>
                    Welcome to Stack Overflow! Take the 2-minute site tour to
                    earn your first badge
                  </p>
                </ContentItem3>
              </ContentItem2>
            </li>
          </ul>
        </Content>
      </Container4>
    );
  }

  return containerContent || null;
}

export default Dropdown;
