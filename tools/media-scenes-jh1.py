"""Original junior-high lessons. Symbolic cards are not physical weights."""
from manim import Scene, VGroup, Text, Rectangle, Line, Circle, Arrow, Create, linear

PAPER = '#f7f5f0'
INK = '#292c29'
GREEN = '#467060'
BLUE = '#2f557d'
FONT = 'Hiragino Sans'


def label(value, size=32, color=INK):
    obj = Text(value, font=FONT, font_size=size, color=color)
    if obj.width > 12:
        obj.scale_to_fit_width(12)
    return obj


def region(obj, left, right, bottom, top, name):
    bounds = (float(obj.get_left()[0]), float(obj.get_right()[0]),
              float(obj.get_bottom()[1]), float(obj.get_top()[1]))
    assert left <= bounds[0] and bounds[1] <= right and bottom <= bounds[2] and bounds[3] <= top, (name, bounds)
    return obj


class LocalLesson(Scene):
    def setup(self):
        self.camera.background_color = PAPER
        self.caption = None
        self.equation = None

    def title(self, value):
        self.add(region(label(value, 40).move_to([0, 3.35, 0]), -6.3, 6.3, 2.95, 3.8, 'title'))
        self.add(Line([-6, 2.83, 0], [6, 2.83, 0], color='#d7dad3'))

    def say(self, value):
        if self.caption is not None:
            self.remove(self.caption)
        self.caption = region(label(value, 29).move_to([0, -3.2, 0]), -6.3, 6.3, -3.8, -2.75, 'caption')
        self.add(self.caption)

    def formula(self, value):
        if self.equation is not None:
            self.remove(self.equation)
        self.equation = region(label(value, 39, GREEN).move_to([0, -2.25, 0]), -6.3, 6.3, -2.6, -1.9, 'formula')
        self.add(self.equation)


class SignedSubtractionLesson(LocalLesson):
    def construct(self):
        self.title('負の数をひくと、どうなる？')
        # Origin and scale are stationary for the entire clip.
        axis = Line([-5.4, 0, 0], [5.4, 0, 0], color=INK)
        ticks = VGroup(*[Line([i*.9, -.12, 0], [i*.9, .12, 0], color=INK) for i in range(-5, 6)])
        numbers = VGroup(*[label(str(i), 26).move_to([i*.9, -.55, 0]) for i in range(-5, 6)])
        start = Circle(radius=.12, color=BLUE, fill_color=BLUE, fill_opacity=1).move_to([-1.8, 0, 0])
        self.add(axis, ticks, numbers, start)
        self.say('ひき算は、ひく数の符号を変えて足す。')
        self.formula('(-2) - (-3) ＝ (-2) ＋ 3')
        self.wait(5)
        arrow = Arrow([-1.8, .8, 0], [.9, .8, 0], color=GREEN, buff=0, stroke_width=5)
        self.add(region(label('＋3：右へ3目盛', 32, GREEN).move_to([-.45, 1.55, 0]), -5, 5, 1.2, 1.9, 'direction'))
        self.say('原点は動かさず、-2から右へ3目盛進む。')
        self.play(Create(arrow), start.animate.move_to([.9, 0, 0]), run_time=3, rate_func=linear)
        self.wait(3)
        self.say('着いたところは1。(-2)＋3は1になる。')
        self.formula('(-2) - (-3) ＝ 1')
        self.wait(5)
        self.say('負の数をひくことを、正の数を足すことに直した。')
        self.wait(4)
        assert abs(float(start.get_center()[0])-.9) < 1e-8
        assert len(ticks) == 11 and len(numbers) == 11
        assert abs(float(arrow.get_start()[0])+1.8) < 1e-8
        assert abs(float(arrow.get_end()[0])-.9) < 1e-8
        print('JH1_VIDEO_GEOMETRY=PASS fixed_origin=0 scale=.9 start=-2 displacement=3 endpoint=1')


def card(value, x, y, color):
    box = Rectangle(width=.65, height=.7, color=INK, stroke_width=2, fill_color=PAPER, fill_opacity=1).move_to([x, y, 0])
    text = label(value, 31, color).move_to(box)
    return VGroup(box, text)


class EquationBalanceLesson(LocalLesson):
    def construct(self):
        self.title('両辺に同じ操作をする')
        # Equal-width cards stand for symbols, never measured mass or length.
        xs = VGroup(card('x', -4.5, .5, GREEN), card('x', -3.5, .5, GREEN))
        left_ones = VGroup(*[card('1', -2.3+i*.8, .5, BLUE) for i in range(3)])
        right_ones = VGroup(*[card('1', 1.1+i*.75, .5, BLUE) for i in range(7)])
        self.add(xs, left_ones, right_ones, label('＝', 44).move_to([0, .5, 0]))
        self.add(region(label('札は式の記号を表す。重さや長さの模型ではない。', 24).move_to([0, 1.85, 0]), -6.3, 6.3, 1.5, 2.2, 'model condition'))
        self.say('2x＋3＝7。左右が等しくなるxを求める。')
        self.formula('2x ＋ 3 ＝ 7')
        self.wait(5)
        marks = VGroup()
        for obj in list(left_ones)+list(right_ones)[4:]:
            center = obj.get_center()
            marks.add(Line(center+[-.29,-.3,0],center+[.29,.3,0],color='#a9590b',stroke_width=5))
        self.say('両辺から3をひくと、2x＝4になる。')
        self.play(Create(marks), run_time=2)
        self.wait(3)
        self.remove(left_ones, marks, *list(right_ones)[4:])
        # Remove the VGroup as well, then add only surviving symbol cards.
        self.remove(right_ones)
        remaining = VGroup(*list(right_ones)[:4])
        self.add(remaining)
        self.formula('2x ＝ 4')
        self.wait(3)
        self.say('両辺を0でない2でわると、x＝2。')
        self.formula('2x ÷ 2 ＝ 4 ÷ 2')
        groups = VGroup(*[Rectangle(width=1.5,height=1.0,color=GREEN,stroke_width=3).move_to([1.475+1.5*i,.5,0]) for i in range(2)])
        self.play(Create(groups),run_time=2)
        self.wait(3)
        self.remove(xs, remaining, groups)
        self.add(card('x',-1.7,.5,GREEN),card('1',1.1,.5,BLUE),card('1',1.9,.5,BLUE))
        self.formula('x ＝ 2')
        self.say('代入すると2×2＋3＝7。もとの式でも確かめる。')
        self.wait(5)
        assert 2*2+3 == 7 and (7-3)/2 == 2
        print('JH1_VIDEO_GEOMETRY=PASS symbolic_cards=true initial=2x+3=7 remove_both=3 remaining=2x=4 divisor=2 solution=2')
