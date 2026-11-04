"""Original grade-8 mathematics. Equations remain visible throughout elimination."""
from manim import Scene, VGroup, Text, Line, Circle, Rectangle, Create, linear

PAPER = '#f7f5f0'
INK = '#292c29'
GREEN = '#467060'
ORANGE = '#995519'
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
        self.equation = region(label(value, 36, GREEN).move_to([0, -2.25, 0]), -6.3, 6.3, -2.6, -1.9, 'formula')
        self.add(self.equation)


class EliminationLesson(LocalLesson):
    def construct(self):
        self.title('加減法：二つの式をつなげる')
        # Both original equations stay in view. A consequence alone is not the system.
        originals = VGroup(
            label('①  2x ＋ y ＝ 7', 38).move_to([-2.7, 1.9, 0]),
            label('②    x − y ＝ 2', 38).move_to([-2.7, .95, 0]))
        for obj in originals:
            region(obj, -6, .2, .55, 2.45, 'original')
        self.add(originals)
        self.say('二つの式を、同時に満たすxとyを求める。')
        self.formula('① 2x ＋ y ＝ 7、② x − y ＝ 2')
        self.wait(5)
        add_line = Line([-5.25, .45, 0], [-.2, .45, 0], color=ORANGE, stroke_width=4)
        self.add(label('① ＋ ②', 30, ORANGE).move_to([-2.7, -.1, 0]))
        result = label('3x ＝ 9', 42, GREEN).move_to([2.8, 1.6, 0])
        region(result, .5, 6, 1.1, 2.15, 'result')
        self.say('左辺どうし、右辺どうしを足すと、yが消える。')
        self.formula('(2x ＋ y) ＋ (x − y) ＝ 7 ＋ 2')
        self.play(Create(add_line), run_time=2, rate_func=linear)
        self.add(result)
        self.wait(4)
        x_value = label('x ＝ 3', 40, GREEN).move_to([2.8, .45, 0])
        y_value = label('②へ：3 − y ＝ 2 → y ＝ 1', 31).move_to([0, -.95, 0])
        region(x_value, .5, 6, 0, 1, 'x'); region(y_value, -6, 6, -1.4, -.5, 'y')
        self.add(x_value, y_value)
        self.say('3x＝9からx＝3。②へ代入するとy＝1。')
        self.formula('共通の解は x ＝ 3、y ＝ 1')
        self.wait(6)
        self.remove(y_value)
        checks = label('① 2×3＋1＝7　　② 3−1＝2', 32).move_to([0, -.95, 0])
        self.add(region(checks, -6, 6, -1.4, -.5, 'checks'))
        self.say('元の二つの式へ戻し、両方で等しいと確かめる。')
        self.wait(5)
        assert 2*3+1 == 7 and 3-1 == 2
        assert 2+1 == 3 and 1+(-1) == 0 and 7+2 == 9
        print('JH2_VIDEO_GEOMETRY=PASS scene=elimination original_equations=2 x=3 y=1 duration=22')


class LinearGraphLesson(LocalLesson):
    def construct(self):
        self.title('一次関数：切片と傾きから描く')
        # Equal physical units on both axes; the origin never moves.
        scale = .45
        def point(x, y):
            return [-2.7 + scale*x, -.45 + scale*y, 0]
        self.add(Line(point(-3, 0), point(3.6, 0), color=INK),
                 Line(point(0, -3.2), point(0, 5.5), color=INK))
        for x in [-3, -2, -1, 1, 2, 3]:
            q = point(x, 0)
            self.add(Line([q[0], q[1]-.06, 0], [q[0], q[1]+.06, 0], color=INK))
            self.add(label(str(x), 18).move_to([q[0], q[1]-.25, 0]))
        for y in [-2, -1, 1, 2, 3, 4, 5]:
            q = point(0, y)
            self.add(Line([q[0]-.06, q[1], 0], [q[0]+.06, q[1], 0], color=INK))
            self.add(label(str(y), 18).move_to([q[0]-.28, q[1], 0]))
        self.add(label('0', 18).move_to([-2.52, -.7, 0]),
                 label('x', 26).move_to(point(4.1, 0)), label('y', 26).move_to(point(0, 6.1)))
        origin = Circle(radius=.055, color=INK, fill_color=INK, fill_opacity=1).move_to(point(0, 0))
        first = Circle(radius=.09, color=BLUE, fill_color=BLUE, fill_opacity=1).move_to(point(0, 1))
        self.add(origin, first)
        self.add(region(label('切片 1 → (0, 1)', 35, BLUE).move_to([2.5, 1.8, 0]), 0, 6, 1.4, 2.25, 'intercept'))
        self.say('y＝2x＋1。x＝0のときy＝1、ここが切片。')
        self.formula('y ＝ 2x ＋ 1')
        self.wait(5)
        across = Line(point(0, 1), point(1, 1), color=ORANGE, stroke_width=5)
        rise = Line(point(1, 1), point(1, 3), color=ORANGE, stroke_width=5)
        self.add(region(label('右へ1、上へ2', 35, ORANGE).move_to([2.5, .7, 0]), 0, 6, .25, 1.15, 'slope'))
        self.say('傾きは2。xを1増やすと、yは2増える。')
        self.play(Create(across), run_time=1, rate_func=linear)
        self.play(Create(rise), run_time=2, rate_func=linear)
        second = Circle(radius=.09, color=BLUE, fill_color=BLUE, fill_opacity=1).move_to(point(1, 3))
        self.add(second)
        self.wait(3)
        self.add(region(label('(1, 3)：3＝2×1＋1', 31).move_to([2.5, -.5, 0]), 0, 6, -.9, -.1, 'substitution'))
        self.say('次の点は(1,3)。式へ入れても同じ値になる。')
        self.wait(5)
        graph = Line(point(-2, -3), point(2, 5), color=GREEN, stroke_width=4)
        self.say('二つの点を通る直線。目盛と原点は動かさない。')
        self.play(Create(graph), run_time=3, rate_func=linear)
        self.wait(3)
        assert abs(float(first.get_center()[1])) < 1e-8
        assert abs(float(second.get_center()[1])-.9) < 1e-8
        assert abs(float(second.get_center()[0])-float(first.get_center()[0])-scale) < 1e-8
        assert abs(float(second.get_center()[1])-float(first.get_center()[1])-2*scale) < 1e-8
        assert all(y == 2*x+1 for x, y in [(-2,-3), (0,1), (1,3), (2,5)])
        print('JH2_VIDEO_GEOMETRY=PASS scene=linear origin_fixed=true scale=.45 intercept=1 slope=2 duration=22')
