"""Two original grade-5 clips; exact quantities and local text only."""
from manim import Scene, VGroup, Text, Rectangle, Line, FadeIn, FadeOut, Create, UpdateFromAlphaFunc

PAPER = '#f7f5f0'
INK = '#292c29'
GREEN = '#467060'
BLUE = '#2f557d'
SOFT = '#edf3ec'
FONT = 'Hiragino Sans'


def label(value, size=32, color=INK):
    obj = Text(value, font=FONT, font_size=size, color=color)
    if obj.width > 12.0:
        obj.scale_to_fit_width(12.0)
    return obj


def region(obj, left, right, bottom, top, name):
    b = (float(obj.get_left()[0]), float(obj.get_right()[0]),
         float(obj.get_bottom()[1]), float(obj.get_top()[1]))
    assert b[0] >= left and b[1] <= right and b[2] >= bottom and b[3] <= top, (name, b)
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
        self.caption = region(label(value, 31).move_to([0, -3.2, 0]), -6.3, 6.3, -3.8, -2.75, 'caption')
        self.add(self.caption)

    def formula(self, value):
        if self.equation is not None:
            self.remove(self.equation)
        self.equation = region(label(value, 39, GREEN).move_to([0, -2.25, 0]), -6.3, 6.3, -2.6, -1.9, 'equation')
        self.add(self.equation)


class UnlikeFractionsLesson(LocalLesson):
    def construct(self):
        self.title('1/2 と 1/3 を合わせる')
        bars = []
        for y, n, color, name in [(1.65, 3, GREEN, '1/2'), (0.35, 2, BLUE, '1/3')]:
            whole = Rectangle(width=6, height=.62, color=INK, stroke_width=2).move_to([.4, y, 0])
            fill = Rectangle(width=n, height=.62, fill_color=color, fill_opacity=.55,
                             stroke_width=0).move_to([-2.6+n/2, y, 0])
            title = label(name, 31).move_to([-4.2, y, 0])
            region(VGroup(whole, fill, title), -5.4, 4.0, -.1, 2.2, 'fraction bars')
            self.add(fill, whole, title)
            bars.append((y, n))
        self.say('同じ長さの1本を、1とする。')
        self.formula('1/2 ＋ 1/3 ＝ ？')
        self.wait(4)
        lines = VGroup(*[Line([-2.6+i, y-.31, 0], [-2.6+i, y+.31, 0], color=INK, stroke_width=2)
                         for y, _ in bars for i in range(1, 6)])
        self.say('どちらも6等分する。色の広さは変えない。')
        self.play(Create(lines), run_time=2)
        self.formula('1/2 ＝ 3/6　　1/3 ＝ 2/6')
        self.wait(4)
        cells = VGroup(*[Rectangle(width=1, height=.62, color=INK, stroke_width=2,
                                  fill_color=GREEN if i<3 else BLUE if i<5 else PAPER,
                                  fill_opacity=.55 if i<5 else 1).move_to([-2.1+i, -.95, 0])
                          for i in range(6)])
        region(cells, -2.7, 3.5, -1.3, -.5, 'six equal result cells')
        self.add(region(label('合わせると', 26).move_to([-4.4, -.95, 0]), -5.6, -3.25, -1.3, -.5, 'result label'))
        self.say('1/6が、3こと2こ。合わせて5こ。')
        self.play(FadeIn(cells), run_time=1.5)
        self.formula('3/6 ＋ 2/6 ＝ 5/6')
        self.wait(4)
        self.say('分母は6のまま。共通の単位で数える。')
        self.formula('1/2 ＋ 1/3 ＝ 5/6')
        self.wait(4)
        print('GRADE5_VIDEO_GEOMETRY=PASS fraction_equal_sixths=6 result_filled=5')


def mean_positions(alpha, lift=1.1):
    fixed = [(-3.2, -1.35+j*.44) for j in range(2)]
    fixed += [(0, -1.35+j*.44) for j in range(4)]
    fixed += [(3.2, -1.35+j*.44) for j in range(4)]
    moving = [((1-alpha)*3.2-alpha*3.2,
               (1-alpha)*(-1.35+j*.44)+alpha*(-1.35+(j-2)*.44)+lift*4*alpha*(1-alpha))
              for j in [4, 5]]
    return fixed + moving


def assert_mean_visible(objects):
    assert len(objects) == 12
    for i, obj in enumerate(objects):
        region(obj, -3.7, 3.7, -1.6, 1.9, 'moving quantity region')
        for other in objects[i+1:]:
            overlap_x = min(obj.get_right()[0], other.get_right()[0])-max(obj.get_left()[0], other.get_left()[0])
            overlap_y = min(obj.get_top()[1], other.get_top()[1])-max(obj.get_bottom()[1], other.get_bottom()[1])
            assert overlap_x <= 1e-6 or overlap_y <= 1e-6, 'moving blocks must stay individually visible'


class MeanLesson(LocalLesson):
    def construct(self):
        self.title('平均は、同じ数ずつに ならした数')
        columns = []
        number_labels = VGroup()
        for i, n in enumerate([2, 4, 6]):
            x = -3.2 + i*3.2
            cells = VGroup(*[Rectangle(width=.8, height=.44, color=GREEN, stroke_width=2,
                                      fill_color=GREEN, fill_opacity=.35).move_to([x, -1.35+j*.44, 0])
                            for j in range(n)])
            region(cells, -3.7, 3.7, -1.6, 1.2, 'initial stacks')
            self.add(cells)
            columns.append(cells)
            self.add(region(label(['A','B','C'][i], 28).move_to([x, 2.25, 0]), -3.6, 3.6, 2.0, 2.5, 'column name'))
            number_labels.add(label(str(n)+'こ', 31).move_to([x, 1.65, 0]))
        self.add(number_labels)
        self.say('Aは2こ、Bは4こ、Cは6こ。全部で12こ。')
        self.formula('2 ＋ 4 ＋ 6 ＝ 12')
        self.wait(4)
        self.say('CからAへ2こ移す。全部の数は変わらない。')
        self.play(FadeOut(number_labels), run_time=.5)
        objects = [cell for col in columns for cell in col]
        moving = VGroup(columns[2][4], columns[2][5])
        def update(group, alpha):
            destinations = mean_positions(alpha)[-2:]
            for obj, (x, y) in zip(group, destinations):
                obj.move_to([x, y, 0])
            assert_mean_visible(objects)
        self.play(UpdateFromAlphaFunc(moving, update), run_time=3)
        self.formula('4 ＋ 4 ＋ 4 ＝ 12')
        new_labels=VGroup(*[label('4こ',31).move_to([-3.2+i*3.2,1.65,0]) for i in range(3)])
        self.play(FadeIn(new_labels),run_time=.6)
        self.wait(4)
        self.say('12こを3組に同じ数ずつ分けると、1組は4こ。')
        self.formula('12 ÷ 3 ＝ 4')
        self.wait(4)
        self.say('平均は4こ。合計を、組の数でわる。')
        self.wait(4)
        centers = [tuple(round(float(x), 3) for x in cell.get_center()[:2]) for col in columns for cell in col]
        assert_mean_visible(objects)
        assert len(centers)==12 and len(set(centers))==12
        assert [sum(abs(x-target)<.001 for x,y in centers) for target in [-3.2,0,3.2]]==[4,4,4]
        print('GRADE5_VIDEO_GEOMETRY=PASS mean_total=12 final_columns=4,4,4')
